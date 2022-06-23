import React, { useState, useEffect, useContext, useReducer } from "react";
import { Context } from "../store/appContext";

const Private = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPrivate();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Welcome to your private page!</h1>
      <h2>Your email is:</h2>
      <p>{store.userEmail}</p>
      <h2>Your user id is:</h2>
      <p>{store.userId}</p>
    </div>
  );
};

export default Private;
