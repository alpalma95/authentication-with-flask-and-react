const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      userToken: localStorage.getItem("jwt-token") ?? "",
      userLogged: false,
      userEmail: null,
      userId: null,
    },
    actions: {
      login: (email, password) => {
        fetch(
          "https://3001-alpalma95-authenticatio-1wocewy3ggc.ws-eu47.gitpod.io/api/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("jwt-token", data.token);
            setStore({ userToken: localStorage.getItem("jwt-token") });
          })
          .catch((err) => alert("Invalid credentials!"));
      },
      getToken: () => {
        setStore({
          userToken: localStorage.getItem("jwt-token") ?? null,
        });
      },
      getPrivate: () => {
        const token = localStorage.getItem("jwt-token");
        fetch(
          "https://3001-alpalma95-authenticatio-1wocewy3ggc.ws-eu47.gitpod.io/api/private",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ userEmail: data.email, userId: data.id });
          });
      },
    },
  };
};

export default getState;
