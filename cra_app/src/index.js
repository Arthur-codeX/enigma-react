import React from "react";

import ReactDOM from "react-dom/client";

import App from "./APP/App";

import { App1 as SomethingElse, App2 } from "./APP/NamedExport";

import Cool from "./APP/NamedExport";

let APP1 = "Hello World";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CatAndDocs></CatAndDocs> */}
    <App />
    {/* <SomethingElse />
    <App2 />
    <Cool /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
