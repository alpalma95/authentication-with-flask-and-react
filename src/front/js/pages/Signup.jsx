import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";

const Signup = () => {
  const [emailValue, setEmailValue] = useState(``);
  const [passwordValue, setPasswordValue] = useState(``);
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  const { store, actions } = useContext(Context);

  const setEmailValueHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const setPasswordValueHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const submitUserInfo = () => {
    if (emailValue && passwordValue) {
      fetch(
        "https://3001-alpalma95-authenticatio-1wocewy3ggc.ws-eu47.gitpod.io/api/signup",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
          }),
        }
      ).then(setRedirectToLogin(true))
        .catch((err) => {
          alert("Something went wrong! " + err.message);
        });
    }
  };

  return !redirectToLogin ? (
    <>
      <div className="container w-50 mx-auto  vh-100 d-flex flex-column">
        <h1 className="mt-5">Create an account!</h1>
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
    <Redirect to="/login" />
  );
};

export default Signup;
