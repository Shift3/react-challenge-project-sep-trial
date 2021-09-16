import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/authActions";

const mapActionsToProps = (dispatch) => ({
  commenceLogin(email, password) {
    dispatch(loginUser(email, password));
  },
});

const LoginForm = ({ commenceLogin, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    commenceLogin(email, password);
    onLogin();
  };

  const onChange = (key, val) => {
    switch (key) {
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
        break;
      default:
        break;
    }
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="inputEmail"
          placeholder="test@test.com"
          value={email}
          onChange={(e) => onChange("email", e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={password}
          onChange={(e) => onChange("password", e.target.value)}
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={(e) => login(e)}
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default connect(null, mapActionsToProps)(LoginForm);
