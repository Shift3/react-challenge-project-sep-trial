import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { fetchUser } from "../loginSlice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    dispatch(fetchUser({ email, password })).then(() =>
      history.push("/view-orders")
    );
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
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={(e) =>
            email.length > 6 && password.length > 6
              ? login(e)
              : alert(
                  "Please Enter Valid Email or Password. Each must be at least 6 characters."
                )
          }
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
