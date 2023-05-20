import React, { useState } from "react";
import "./LoginPage.css";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import jwt_decode from "jwt-decode";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      const loginData = {
        email: email,
        password: password,
      };
      const response = await fetch(
        "https://shopfuriturebe-production.up.railway.app/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (response.status === 403) {
        setError("Sai tài khoản hoặc mật khẩu");
        return;
      }

      if (!response.ok) {
        setError("Server đang có lỗi");
        return;
      }
      const data = await response.json();
      const jwtToken = data.token;
      dispatch(authActions.login());
      sessionStorage.setItem("jwtToken", jwtToken);
      const decoded = jwt_decode(jwtToken);
      const res = await fetch(
        "https://shopfuriturebe-production.up.railway.app/role",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(decoded.sub),
        }
      );
      if (!res.ok) {
        setError("Server đang có lỗi");
        return;
      }
      const role = await res.json();
      if (role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      setError("Nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h1 className="mt-4  mb-3">Đăng nhập</h1>
        <Form onSubmit={loginHandler}>
          <input
            type="text"
            id="email"
            className="fadeIn second mb-3"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third  mb-3"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="Đăng nhập" />
        </Form>
        <p style={{ color: "red" }}>{error}</p>

        <div id="formFooter">
          <span>Chưa có tài khoản ?</span>
          <Link
            className="underlineHover"
            to="/register"
            style={{ textDecoration: "none" }}
          >
            Đăng kí ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
