import React from "react";
import { json, useLoaderData, redirect } from "react-router-dom";
import UserEntity from "../components/UserEntity";
const ManageUser = () => {
  const data = useLoaderData();
  return (
    <main className="main mt-4">
      <div className="container">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <UserEntity user={user} key={user.id} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ManageUser;
export async function loaderListUser() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://shopfuriturebe-production.up.railway.app/auth/admin/user",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.status === 403) {
    return redirect("/");
  }
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
export async function loaderUserEdited({ params }) {
  const id = params.userId;
  const token = sessionStorage.getItem("jwtToken");
  const response = await fetch(
    "https://shopfuriturebe-production.up.railway.app/auth/admin/user/" + id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (response.status === 403) {
    return redirect("/");
  }
  if (!response.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  }
  const data = await response.json();
  return data;
}
