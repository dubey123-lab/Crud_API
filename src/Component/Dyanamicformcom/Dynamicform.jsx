import React, { useState, useEffect } from "react";
import "../table.css";
const DynamicForm = () => {
  /////define State for add row

  const [data, _setData] = useState([]);
  const [columnStatus, _setcolumnStatus] = useState(false);

  // const [ros, settotalRows] = useState([])
  //  const [myFiled, setmyFiled] = useState({
  //    nane : "",
  //    emall : "",
  //    age : ""
  //  })

  const addRow = () => {
    const row = {
      id: Math.ceil(Math.random() * 10000),
      name: "",
      email: "",
      age: "",
      hobby: [],
    };

    const values = [...data, row];
    _setData(values);
  };

  const removeRow = (id) => {
    const filteredData = data.filter((item, index) => index !== id);
    _setData(filteredData);
  };

  const handleChange = (e, index) => {
    // const { name, value } = e.target;
    // const copyData = data.map((item, key) => {
    //   if(key === index){
    //     console.log(" match ")
    //     return {...item, [name]: value}
    //     }
    //   return item
    // })
    // _setData(copyData);
    // console.log("copyData", copyData);
  };

  const handleSubmit = () => {
    const finalData = data.map((item, index) => {
      console.log(item);
      // let hobbiesControl = document.querySelectorAll(`#hobby_${index}`).forEach((item) => {
      //   console.log(item.value);
      //   return item.value;
      // });

      let hobbiesControl = [...document.querySelectorAll(`#hobby_${index}`)]
      let hobbiesValues = hobbiesControl.map((item) => {
        return item.value
      })

      return {
        name: document.getElementById(`name_${item.id}`).value,
        email: document.getElementById(`email_${item.id}`).value,
        age: document.getElementById(`age_${item.id}`).value,
        hobby: hobbiesValues,
      };
    });

    console.log({ finalData });
    _setData(finalData);
    localStorage.setItem('inputvalue', JSON.stringify(data))


    // const finalData = data.map((item, index) => ({

    //   name: document.getElementById(`name_${item.id}`).value,
    //   email: document.getElementById(`email_${item.id}`).value,
    //   age: document.getElementById(`age_${item.id}`).value,
    //   hobby: document.getElementById(`hobby_${item.id}_${item.hobby.index}`).value,
    // }));
  };

  const addHobiesColumn = (id) => {
    const newData = data.map((value, index) => {
      if (index === id) {
        const userHobbies = [...value.hobby];
        userHobbies.push("");
        return { ...value, hobby: userHobbies };
      }

      return value;
    });

    _setData(newData);
  };

  const removeHobiesText = (id, rowid) => {
    let copyHobbyValues = [...data];
    copyHobbyValues.forEach((val) => {
      if (val.id === rowid) {
        val.hobby = val.hobby.filter((hobby, index) => {
          return index !== id;
        });
      }
    });
    _setData(copyHobbyValues);
    // let findData = temp.find((value, index) => {
    //   return value.id === rowid;
    // });

    // console.log(findData);

    // findData = findData && findData.hobby.filter((value, textid) => {
    //   console.log(value);
    //   return textid !== id;
    // });

    // console.log("Fillter Data is", findData);

    // console.log(temp);
    // temp[rowid].hobby = filtterData

    // _setData([...data, filtterData])
  };

  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table>
              <thead>
                <tr>
                  <th className="text-center"> # </th>
                  <th className="text-center"> Name </th>
                  <th className="text-center"> Email </th>
                  <th className="text-center"> Age </th>
                  <th className="text-center" style={{ width: "200px" }}>
                    {" "}
                    Hobbies{" "}
                  </th>
                  <th className="text-center">
                    {" "}
                    <button className="btn btn-primary" onClick={addRow}>
                      +
                    </button>{" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((value, id) => {
                  return (
                    <tr id="addr0" key={value.id}>
                      <td>{id}</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          id={`name_${value.id}`}
                          className="form-control"
                          placeholder="Enter Name"
                          onChange={(e) => handleChange(e, id)}
                        />
                      </td>
                      <td>
                        <input
                          type="email"
                          name="email"
                          id={`email_${value.id}`}
                          className="form-control"
                          placeholder="Enter Email"
                          // onChange={()=>{handleChange(value.id)}}
                          onChange={(e) => handleChange(e, id)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="age"
                          id={`age_${value.id}`}
                          className="form-control"
                          placeholder="Enter Age"
                          // onChange={()=>{handleChange(value.id)}}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        {value.hobby.map((hobby, index) => (
                          <div style={{ display: "flex" }} key={index}>
                            <input
                              type="text"
                              name="hobbies"
                              id={`hobby_${id}`}
                              style={{ width: "150px" }}
                              className="form-control"
                              placeholder="Enter Hobbies"
                            />

                            <i
                              class="fa fa-minus"
                              aria-hidden="true"
                              onClick={() => removeHobiesText(index, value.id)}
                              style={{ marginLeft: "6px", marginTop: "10px" }}
                            ></i>
                          </div>
                        ))}

                        <i
                          class="fa fa-plus"
                          aria-hidden="true"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            addHobiesColumn(id);
                          }}
                        ></i>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => {
                            removeRow(id);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-large"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DynamicForm;
