import React, { useState } from "react";
import { json, useNavigate, useLoaderData } from "react-router-dom";
const NewUser = () => {
  const nav = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const data = useLoaderData();
  const [firstname, setFirstname] = useState(data.firstname);
  const [lastname, setLastName] = useState(data.lastname);
  const [role, setRole] = useState(data.role);
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const cancelHandler = () => {
    nav("/admin");
  };
  const editUserHandler = async (e) => {
    e.preventDefault();
    if (
      (firstname.length > 0 && lastname.length > 0 && role === "ADMIN") ||
      role === "USER"
    ) {
      const putData = {
        firstname: firstname,
        lastname: lastname,
        role: role,
      };
      let url =
        "https://shopfuriturebe-production.up.railway.app/auth/admin/user/" +
        data.id;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(putData),
      });
      if (response.status === 403) {
        return response;
      }

      if (!response.ok) {
        throw json({ message: "Could not do this action." }, { status: 500 });
      }
      nav("/admin");
    } else {
      alert("Nhập đầy đủ thông tin!");
    }
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent" className="py-3">
        <h1>EDIT</h1>
        <form onSubmit={editUserHandler}>
          <input
            type="text"
            className="fadeIn second mb-3"
            placeholder="firstname"
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <input
            type="text"
            className="fadeIn second mb-3"
            placeholder="lastname"
            value={lastname}
            onChange={handleLastNameChange}
          />
          <input
            type="text"
            className="fadeIn second mb-3"
            placeholder="Role"
            value={role}
            onChange={handleRoleChange}
          />
          <div className="row">
            <div className="col-6">
              <input
                type="button"
                className="fadeIn fourth"
                value="Cancel"
                onClick={cancelHandler}
              />
            </div>
            <div className="col-6">
              <input type="submit" className="fadeIn fourth" value="EDIT" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewUser;
