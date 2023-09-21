import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App.jsx'
//import Message from "./Message.jsx";
import "./Pokemon.jsx";
import "./index.css";
import "./App.css";
import Pokemon from "./Pokemon.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Message messageData="Made by : " messageType="Visesh" /> */}
    {/* <App /> */}
    <Pokemon />
  </React.StrictMode>
);
