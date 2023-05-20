import React from "react";
import AuthenticatedHeader from "../components/AuthenticatedHeader";
import { Outlet } from "react-router-dom";
const AdminPage = () => {
  return (
    <>
      <AuthenticatedHeader />
      <Outlet />
    </>
  );
};

export default AdminPage;
