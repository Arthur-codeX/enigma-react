// State is in react.
// Hook useState
//<In built function in react that>
// <You can build your own hooks>
//funtion=> useState(<Intial State>)
// Return array=> which we destructure
// First Element in the array is state variable
// Second Element is the state variable function.
// Second element is used to update our state
// Second element is a function.Whatever we pass
// inside the function is new state.
// When state changes in one place, everywhere its used
// it will also change.
// State change will cause a rerender of the component and its children.

// Syblings canot communicate with their parents.
// Parent to child.<prop>
// Child to parent. <prop function>

import { useState } from "react";

const Refresher = () => {
  const [count, setCount] = useState(0);

  function btnClick() {
    setCount(count + 1);
  }

  //   console.log("Refresher Render");
  console.log("Refresher Render");
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={btnClick}>Click ME</button>
      <ChildA count={count} btnClick={btnClick} />
      <ChildB count={count} btnClick={btnClick} />
      <ChildC />
    </div>
  );
};

const ChildA = ({ btnClick, count }) => {
  console.log("ChildA Render");
  return (
    <div>
      <h1>Child A</h1>
      <p>You clicked {count} times</p>
      <button onClick={btnClick}>Click ME</button>
    </div>
  );
};

const ChildB = ({ btnClick, count }) => {
  console.log("ChildB Render");
  return (
    <div>
      <h1>Child B</h1>
      <p>You clicked {count} times</p>
      <button onClick={btnClick}>Click ME</button>
    </div>
  );
};

const ChildC = () => {
  console.log("ChildC Render");
  return (
    <div>
      <h1>Child C</h1>
    </div>
  );
};

export default Refresher;
