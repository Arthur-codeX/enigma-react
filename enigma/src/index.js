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

//import UseEffectComponent from "./UseEffect/UseEffectComponent";

import UseRefComponent from "./CatchUp/useRefComponent";

import DynamicDataRender from "./CatchUp/DynamicDateRender";

import Forms from "./CatchUp/Forms";

import ConditionalRender from "./CatchUp/ConditionalRender";

import UseEffectComponent from "./CatchUp/UseEffectComponent";

import ClickMe from "./CatchUp/CustomHooks/ClickMe";

import Main from "./CatchUp/Context/Main";

import Main2 from "./CatchUp/Context/Main2";

const root = ReactDOM.createRoot(document.getElementById("roots"));
root.render(
  <React.StrictMode>
    <Main2 />
  </React.StrictMode>
);
