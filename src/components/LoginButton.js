import React from "react";
import UserIcon from "./UserIcon";
import classes from "./Login.module.css";
const Login = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <UserIcon />
      </span>
      <span>Đăng nhập</span>
    </button>
  );
};

export default Login;
