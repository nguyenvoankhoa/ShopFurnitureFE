import React from "react";
import { NavLink, Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
const AuthenticatedHeader = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to=""
              end
            >
              MANAGE PRODUCT
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="user"
              end
            >
              MANAGE USER
            </NavLink>
          </li>
        </ul>
        <LogoutButton />
      </div>
    </nav>
  );
};

export default AuthenticatedHeader;
