import { NavLink } from "react-router-dom";
import { useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
const Header = (props) => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const [isShow, setShow] = useState(false);
  const showHandler = () => {
    setShow((preState) => {
      return !preState;
    });
  };
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MOHO<span>.</span>
        </NavLink>

        <button
          className={isShow ? "navbar-toggler" : "navbar-toggler collapsed"}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded={isShow}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick={showHandler}></span>
        </button>

        <div
          className={
            isShow
              ? "collapse navbar-collapse"
              : "navbar-collapse collapse show"
          }
          id="navbarsFurni"
        >
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to=""
                end
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="items"
                end
              >
                Sản Phẩm
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="about"
                end
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="service"
                end
              >
                Dịch vụ
              </NavLink>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li style={{ padding: "8px" }}>
              <HeaderCartButton onClick={props.onShowCart} />
            </li>
            <li>
              {auth ? (
                <LogoutButton />
              ) : (
                <NavLink className="nav-link" to="/login">
                  <LoginButton />
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
