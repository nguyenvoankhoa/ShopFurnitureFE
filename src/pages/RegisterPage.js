import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    if (
      email.length > 0 &&
      password.length > 0 &&
      firstname.length > 0 &&
      lastname.length > 0
    ) {
      const registerData = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
      };
      const response = await fetch(
        "https://shopfuriturebe-production.up.railway.app/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );
      if (!response.ok) {
        setError("Server đang có lỗi");
        return;
      }
      const data = await response.json();
      const jwtToken = data.token;
      if (!jwtToken) {
        setError("Đã có tài khoản này");
        return;
      }

      sessionStorage.setItem("jwtToken", jwtToken);
      navigate("/");
    } else {
      setError("Nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h1 className="mt-4  mb-3">Đăng ký</h1>
        <form onSubmit={registerHandler}>
          <input
            type="text"
            className="fadeIn second mb-3"
            placeholder="First Name"
            value={firstname}
            onChange={handleFirstnameChange}
          />
          <input
            type="text"
            className="fadeIn second mb-3"
            placeholder="Last Name"
            value={lastname}
            onChange={handleLastnameChange}
          />
          <input
            type="text"
            className="fadeIn second mb-3"
            name="login"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third  mb-3"
            name="login"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input type="submit" className="fadeIn fourth" value="Đăng ký" />
        </form>
        <p style={{ color: "red" }}>{error}</p>

        <div id="formFooter">
          <span>Đã có tài khoản ?</span>
          <Link
            className="underlineHover"
            to="/login"
            style={{ textDecoration: "none" }}
          >
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
