import React from "react";
import { Link, json, useLoaderData } from "react-router-dom";
import TableItem from "../components/TableItem";
import { Button } from "react-bootstrap";
const ManageProduct = () => {
  const data = useLoaderData();
  const token = sessionStorage.getItem("jwtToken");
  return (
    <main className="main mt-4">
      <div className="container">
        <Button className="btn-link">
          <Link
            to="/admin/new"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Thêm sản phẩm
          </Link>
        </Button>

        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableItem item={item} key={item.id} token={token} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ManageProduct;
export async function loader() {
  const res = await fetch(
    "https://shopfuriturebe-production.up.railway.app/items"
  );
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
