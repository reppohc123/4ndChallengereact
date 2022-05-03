//Create a React app from scratch.
import React from "react";
import ReactDom from "react-dom";
import App from "./comonents/app.jsx";
import "/public/styles.css";

ReactDom.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
