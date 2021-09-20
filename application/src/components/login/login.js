import React from "react";
import LoginForm from "./login-form/loginForm";
import "./login.css";

const Login = () => {
  return (
    <div className="main-body">
      <h1 className="text-center">Login Screen</h1>
      <div className="d-flex justify-content-center mt-5">
        <LoginForm/>
      </div>
    </div>
  );
};

export default Login;
