import React from "react";

import "./form.css";

const Table = (props) => {
  console.log("Table Data is", props);

  // const updateData = (id)=>{
  //     alert(id)
  // }
  return (
    <>
      <div className="table_div">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" onClick={props.tableData.sortData}>
                First Name
              </th>
              <th scope="col">Last Name</th>
              <th scope="col">Emai;</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.tableData.userdata.reducer.users.map((value) => {
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
