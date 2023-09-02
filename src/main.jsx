import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

//initial localStorage value set to empty string
localStorage.setItem("BearerData", JSON.stringify({}));

//axios request interceptor
axios.interceptors.request.use((request) => {
  const localStorageBT_Value = JSON.parse(
    localStorage.getItem("BearerData")
  ).accessToken;
  request.headers["Authorization"] = "Bearer" + localStorageBT_Value;
  return request;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
