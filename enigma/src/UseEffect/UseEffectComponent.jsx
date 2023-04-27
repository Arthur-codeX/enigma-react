//Life Cycle Hook.<>
//Component did Mount, Component did unmount.
//Component Was Render, Component Killed

//useEffect
//When a component is rendered.
// After Render<Posible<Turn this off>>
// When a component is unmounted.

//Useffect ->
// 1. When a component is rendered.Mounted
//2. When a component is rerenderd/
//3. When a component is unmounted.

//How do we use UseEffect
//takes in two parameters
//1. Perameter is function:<Return of this is the method that will be called when
//A component UnMounts.>
//2. Dependency Array: <What will trigger the use effect to render again>

// Mouse Js Events. Mouse

import React, { useState, useEffect } from "react";

const State = () => {
  const [click, setClick] = useState(0);
  const [fiveFold, setFiveFold] = useState(0);
  const [tenFold, setTenFold] = useState(0);

  const [show, setShow] = useState(false);

  const [postion, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // x: event.clientX, y: event.clientY
      console.log("x: ", e.clientX);
      console.log("y: ", e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
      console.log("Current Mouse Position");
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  // useEffect(() => {
  //   console.log("Component was mounted");
  //   console.log("Use Effect Run");
  //   console.log("Five Fold:", fiveFold);
  //   console.log("Ten Fold,", tenFold);
  // }, [fiveFold, tenFold]);
  //The use Effect will run once. When the component is mounted
  //By Putting an Empty Dependency Array
  // An endless loop

  //

  // useEffect(() => {
  //   setClick(click + 1);
  //   console.log("Bad Code");
  // });

  // useEffect(() => {
  //   console.log("USe Effect Run. Without Depency");
  // }, []);

  function handleClickMe() {
    console.log(`Button was clicked: ${click}`);

    setClick(click + 1);

    let modulo = (click + 1) % 5;
    let modulo2 = (click + 1) % 10;
    if (modulo === 0) {
      setFiveFold((click + 1) / 5);
    }
    if (modulo2 === 0) {
      setTenFold((click + 1) / 10);
    }
  }

  return (
    <div>
      <h1>
        Mouse Postion {postion.x},{postion.y}
      </h1>
      <p>no of clicks {click}</p>
      <p>
        <button onClick={handleClickMe}>Click Me</button>
      </p>
      <p>
        {/* Toggle */}
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </p>
      <p>no of Five Fold {fiveFold}</p>
      {show === true ? <ConditionalComponent /> : null}
    </div>
  );
};

const ConditionalComponent = () => {
  let k = 0;
  useEffect(() => {
    console.log("Conditional Component Was Mounted");
    // Time Threads
    // Clean Memory
    // return () => {
    //   console.log("Componet UnMounted");
    // };
    let interval = setInterval(() => {
      console.log("Interval Running: ", k);
      k = k + 1;
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <h1>I am conditional </h1>;
};

export default State;
