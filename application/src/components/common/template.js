import React from "react";
import { Nav } from "../../components";
import { useSelector } from "react-redux";
import "./template.css";

const Template = (props) => {
  const email = useSelector((state) => state.login.email);

  return (
    <div className="bg-layer">
      <div className="fg-layer">
        {email.length > 0 ? (
          <div className="user-email">User: {email}</div>
        ) : (
          <div className="user-email">User: Not Logged In</div>
        )}
        <label className="logo">Bruce's Diner</label>
        <Nav />
        {props.children}
      </div>
    </div>
  );
};

export default Template;
