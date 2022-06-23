import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [emailValue, setEmailValue] = useState(``);
  const [passwordValue, setPasswordValue] = useState(``);
  const { store, actions } = useContext(Context);
  const [link, setLink] = useState("/login");

  useEffect(() => {
    <Redirect to="/" />;
  }, [store.userToken]);

  const setEmailValueHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const setPasswordValueHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const submitUserInfo = () => {
    if (emailValue && passwordValue) {
      actions.login(emailValue, passwordValue);
      setLink("/");
    }
    setEmailValue("");
    setPasswordValue("");
  };

  return !store.userToken ? (
    <>
      <div className="container w-50 mx-auto  vh-100 d-flex flex-column">
        <h1 className="mt-5">Login</h1>
        <label className="mt-5" htmlFor="email_input">
          Email:
        </label>
        <input
          type="text"
          placeholder="user@email.com"
          id="email_input"
          value={emailValue}
          onChange={setEmailValueHandler}
        />
        <br />
        <label htmlFor="password_input">Password:</label>
        <input
          type="password"
          placeholder=""
          value={passwordValue}
          id="password_input"
          onChange={setPasswordValueHandler}
        />
        <br />
        <button className="btn btn-outline-dark" onClick={submitUserInfo}>
          Submit
        </button>
      </div>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Login;
