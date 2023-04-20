import React from "react";
import ReactDOM from "react-dom/client";

import Fun from "./IntroComponents/Fun.Component";
// import Car from "./IntroComponents/Class.Component";

// React is a single app.
// Client Side rendering.
// Server side rendering.

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(
  <React.StrictMode>
    {/* <Fun />
    <Car /> */}
    {/* <h1>HEllo World</h1> */}
    <Fun />
  </React.StrictMode>
);
