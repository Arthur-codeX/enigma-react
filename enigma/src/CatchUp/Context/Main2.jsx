import React, { createContext, useContext } from "react";
import useClick from "../CustomHooks/useClick";

// Create Context from React.
// UseContext
// The Share parent has to have that contex.

const MainContext = createContext();

const Main = () => {
  const { click, incrementClick } = useClick();

  return (
    <MainContext.Provider value={{ click, incrementClick }}>
      <div>
        <ParentB />
        <ParentA />

        <button onClick={incrementClick}>Incerment</button>
      </div>
    </MainContext.Provider>
  );
};

const ParentA = () => {
  return (
    <div>
      <h1>I am parent A</h1>
      <ChildA />
    </div>
  );
};

const ParentB = ({ click }) => {
  return (
    <div>
      <h1>I am parent B</h1>
      <ChildB />
    </div>
  );
};

const ChildA = () => {
  const { click } = useContext(MainContext);
  return <h1>I am Child A:{click}</h1>;
};

const ChildB = () => {
  const { click, incrementClick } = useContext(MainContext);
  const data = useContext(MainContext);
  console.log(data);
  return (
    <div>
      <h1>I am Child B: {click}</h1>{" "}
      <button onClick={data.incrementClick}>Incerment</button>
    </div>
  );
};

export default Main;
