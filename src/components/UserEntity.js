import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
const UserEntity = (props) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const deleteUserHandler = async (id) => {
    const response = await fetch(
      "https://shopfuriturebe-production.up.railway.app/auth/admin/user/" + id,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 403) {
      navigate("/");
      return;
    }

    if (!response.ok) {
      throw json({ message: "Could not delete user." }, { status: 500 });
    }
    navigate("/admin");
    return null;
  };
  return (
    <tr>
      <th scope="row">{props.user.id}</th>
      <td>{props.user.firstname}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.email}</td>
      <td>{props.user.role}</td>
      <td>
        <Link to={`${props.user.id}`}>
          <i className="fa-solid fa-pen"></i>
        </Link>
      </td>
      <td onClick={() => deleteUserHandler(props.user.id)}>
        <i className="fa-solid fa-trash"></i>
      </td>
    </tr>
  );
};

export default UserEntity;
