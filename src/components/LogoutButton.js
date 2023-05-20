import React from "react";
import { json, useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import LogoutIcon from "./LogoutIcon";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
const LogoutButton = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = sessionStorage.getItem("jwtToken");
  const logOutHandler = async () => {
    const response = await fetch(
      "https://shopfuriturebe-production.up.railway.app/logout",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw json(
        { message: "Could not fetch item." },
        {
          status: 500,
        }
      );
    } else {
      sessionStorage.removeItem("jwtToken");
      dispatch(authActions.logout());
      return nav("/");
    }
  };
  return (
    <button
      className={classes.button}
      onClick={logOutHandler}
      style={{ margin: "8px" }}
    >
      <span className={classes.icon}>
        <LogoutIcon />
      </span>
      <span>Đăng xuất</span>
    </button>
  );
};

export default LogoutButton;
