import React from "react";
import { json, Link, useNavigate } from "react-router-dom";
const TableItem = (props) => {
  const navigate = useNavigate();
  const deleteItemHandler = async (id) => {
    const response = await fetch(
      "https://shopfuriturebe-production.up.railway.app/auth/admin/delete/" +
        id,

      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    if (response.status === 403) {
      navigate("/");
      return;
    }

    if (!response.ok) {
      throw json({ message: "Could not delete item." }, { status: 500 });
    }
    navigate("/admin");
  };
  return (
    <tr>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.name}</td>
      <td>{props.item.description}</td>
      <td>{props.item.price}</td>
      <td>
        <Link to={`${props.item.id}`}>
          <i className="fa-solid fa-pen"></i>
        </Link>
      </td>
      <td onClick={() => deleteItemHandler(props.item.id)}>
        <i className="fa-solid fa-trash"></i>
      </td>
    </tr>
  );
};

export default TableItem;
