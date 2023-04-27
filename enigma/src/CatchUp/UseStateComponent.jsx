import React, { useState } from "react";

// useUstate. Hook.<In built functions>
// return an array
// Destructure an Array and An Object.
// First element is the state variable
// Second is the state variable function.

// To change the state variable you pass the new state
// In the state variable function as a parameter.
// When a state change happens in react the component is rerenderd.
// You can also a function inside the state variable function the
// Return of this passed function is the new state.




const UseStateComponent = () => {
  // [destrurcture the array]=usestate(intial value)


  const [click, setClick] = useState(0);
  const test = useState(0);
  //console.log("UseStateComponent Rendered");

  function handleClick() {
    let new_state = click + 1;
    setClick(new_state);
  }

  function handleTestClick() {
    let new_state = test[0] + 1;
    test[1](new_state);
  }

  return (
    <div>
      <h1>No of clicks :{click}</h1>
      <h1>No of test Clicks:{test[0]}</h1>
      <p>
        <button onClick={handleClick}>Click </button>
      </p>
      <p>
        <button onClick={handleTestClick}>Test Click </button>
      </p>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  console.log("ChildComponent Rendered");
  return (
    <div>
      <h1>Child </h1>
    </div>
  );
};

export default UseStateComponent;
