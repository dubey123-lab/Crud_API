import React, { useState, useEffect } from "react";
import "./table.css";

const Table = (props) => {
  // useEffect(() => {
  //   console.log("newData is " , data);
  // }, [data])

  const [useData, _setUserData] = useState([]);
  useEffect(() => {
    _setUserData(props.tableData.userdata.reducer.users);
    console.log("Data is inside useffect ", useData);
  }, [props.tableData.userdata.reducer.users]);

  console.log("Data is ", useData);

  const [Filed, setFiled] = useState();

  ///// acesnding sorting
  const acesndingSort = (key) => {
    setFiled(key);
    console.log("select filed is", key);
    const newData = [...useData].sort((a, b) => {
      return a[key] > b[key] ? 1 : -1;
    });
    _setUserData(newData);
    console.log("afther sort data is", newData);
  };

  ////// desending sorting
  const desendingSort = (key) => {
    setFiled(key);
    console.log("select filed is", key);
    const newData = [...useData].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1;
    });
    _setUserData(newData);
    console.log("afther sort data is", newData);
  };

  return (
    <>
      <div className="table_div">
        <table>
          <thead>
            <tr>
              <th>
                Name{" "}
                <i
                  class="fa fa-arrow-up"
                  onClick={() => {
                    acesndingSort("name");
                  }}
                ></i>
                <i
                  class="fa fa-arrow-down"
                  onClick={() => {
                    desendingSort("name");
                  }}
                ></i>{" "}
              </th>
              <th>
                UserName{" "}
                <i
                  class="fa fa-arrow-up"
                  onClick={() => {
                    acesndingSort("username");
                  }}
                ></i>
                <i
                  class="fa fa-arrow-down"
                  onClick={() => {
                    desendingSort("username");
                  }}
                ></i>
              </th>
              <th>
                Email{" "}
                <i
                  class="fa fa-arrow-up"
                  onClick={() => {
                    acesndingSort("email");
                  }}
                ></i>
                <i
                  class="fa fa-arrow-down"
                  onClick={() => {
                    desendingSort("email");
                  }}
                ></i>
              </th>
              <th>
                Phone Number{" "}
                <i
                  class="fa fa-arrow-up"
                  onClick={() => {
                    acesndingSort("phone");
                  }}
                ></i>
                <i
                  class="fa fa-arrow-down"
                  onClick={() => {
                    desendingSort("phonr");
                  }}
                ></i>
              </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {useData.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>
                    <button
                      onClick={() => {
                        props.tableData.editValue({
                          id: value.id,
                          name: value.name,
                          username: value.username,
                          email: value.email,
                          phone: value.phone,
                        });
                      }}
                    >
                      Edit
                    </button>{" "}
                    &nbsp; &nbsp;{" "}
                    <button
                      onClick={() => {
                        props.tableData.deleteData(value.id);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
