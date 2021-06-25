import React , {useState} from "react";

const Updateform = (props) => {
  console.log("updated value is", props.value.userdata.reducer.updateData[0].name);

  const [myFiled, setmyFiled] = useState({
    id:  props.value.userdata.reducer.updateData[0].id,
    name: props.value.userdata.reducer.updateData[0].name,
    username: props.value.userdata.reducer.updateData[0].username,
    email: props.value.userdata.reducer.updateData[0].email,
    phone:  props.value.userdata.reducer.updateData[0].phone,
});

console.log("Selected id is" , myFiled);

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setmyFiled({ ...myFiled, [name]: value });
    console.log(myFiled);
};
  return (
    <>
      <div className="form-div">
        {props.value.userdata.reducer.updateData.map((value) => {
            return<form>
            <div class="input-div">
              <label>First Name</label>
              <input
                type="text"
                name="name"
                value={myFiled.name}
                onChange={handleChange}
                placeholder="Enter Name"
                autoComplete="off"
              />
            </div>

            <div class="input-div">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                value={myFiled.username}
                onChange={handleChange}
                placeholder="Enter User Name"
                autoComplete="off"
              />
            </div>

            <div class="input-div">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={myFiled.email}
                onChange={handleChange}
                placeholder="Enter Email"
                autoComplete="off"
              />
            </div>

            <div class="input-div">
              <label>Mobile Number</label>
              <input
                type="text"
                name="phone"
                value={myFiled.phone}
                onChange={handleChange}
                placeholder="Enter Mobile Number"
                autoComplete="off"
              />
            </div>

            <button
              type="reset"
              className="btn-submit"
              onClick={() => {
                  props.value.saveUpdate(myFiled);
                  setmyFiled({ name: "", username: "", email: "", phone: "" });
              }}
            >
              Update
            </button>
            <button type="button" className="btn-submit">
              Clear
            </button>
          </form>;
        })}
      </div>
    </>
  );
};

export default Updateform;
