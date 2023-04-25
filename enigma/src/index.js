import React from "react";
import ReactDOM from "react-dom/client";

import Fun from "./IntroComponents/Fun.Component";
// import Car from "./IntroComponents/Class.Component";

// React is a single app.
// Client Side rendering.
// Server side rendering.

import Dynamic from "./DynamicData/Dynamic";
import Prop from "./Prop/Prop";

import State from "./UseState/State";

import Event from "./Events/Event";

import Refresher from "./StateCartProject/Refresher";

import CartMiniProject from "./StateCartProject";

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(
  <React.StrictMode>
    {/* <Fun />
    <Car /> */}
    {/* <h1>HEllo World</h1> */}
    <CartMiniProject />
  </React.StrictMode>
);
