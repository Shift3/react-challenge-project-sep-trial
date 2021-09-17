import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../login/loginSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  return (
    <div className="nav-strip">
      <Link to={isLoggedIn ? "/order" : "/login"} className="nav-link">
        <div className="nav-link-style">
          <label className="nav-label">Order Form</label>
        </div>
      </Link>
      <Link to={isLoggedIn ? "/view-orders" : "/login"} className="nav-link" id="middle-link">
        <div className="nav-link-style">
          <label className="nav-label">View Orders</label>
        </div>
      </Link>
      <Link to={"/"} className="nav-link">
        <div className="nav-link-style" onClick={() => dispatch(logout())}>
          <label className="nav-label">Log Out</label>
        </div>
      </Link>
    </div>
  );
};

export default Nav;
