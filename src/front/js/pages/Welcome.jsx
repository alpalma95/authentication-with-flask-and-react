import React, { useState, useEffect, useContext } from "react";
import Private from "./Private.jsx";
import { Context } from "../store/appContext";

const Welcome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.userToken ? (
        <Private />
      ) : (
        <div className="container mx-auto vh-100 py-5">
          <h1 className="mt-5">Welcome to your favorite login platform!</h1>
          <p>
            If you are seeing this, it means that your session has expired or
            that you don't have an account yet. Please log in or create a free
            account.
          </p>
        </div>
      )}
    </>
  );
};

export default Welcome;
