import React, { useState, useEffect } from "react";
/// useEffect is hook.
/// it is used to monitor state changes on variables,
///  Mointer component mount,
/// MOnitor component unmount,

// Syntax,
// useEffect function takes in two parameters.
// Parameter no 1. function,arr<Dependency array>
// the return of the first parameter is what
// is called when the component is unMount<Clean Up>

//Will run when a component is mounted.// Inital Render
// Also run when a state change occurs <Turn of in dependecy>[]

const UseEffectComponent = () => {
  const [click, setClick] = useState(0);

  const [show, setShow] = useState(false);

  const [fiveFold, setFiveFold] = useState(0);
  const [tenFold, setTenFold] = useState(0);

  //   useEffect(() => {
  //     console.log("Running once. When component is mounted. useEffect 1");
  //     // setClick(click + 1);
  //   }, []);

  //   // watch for variable.

  //   useEffect(() => {
  //     console.log("Running once. When component is mounted.useEffect 2");
  //     console.log("Will also run when a state change occurs.  useEffect 2");
  //   });

  //   useEffect(() => {
  //     console.log("Click Changed");
  //     if (click === 0) return;
  //     if (click % 5 == 0) {
  //       setFiveFold(fiveFold + 1);
  //     }

  //     if (click % 7 == 0) {
  //       setTenFold(tenFold + 1);
  //     }
  //   }, [click]);

  //   useEffect(() => {
  //     console.log("Five Fold Value:, ", fiveFold);
  //     console.log("Ten Fold Value:, ", tenFold);
  //   }, [fiveFold, tenFold]);

  //   function handleClick() {
  //     let new_state = click + 1;
  //     setClick(new_state);
  //   }

  useEffect(() => {
    if (show) {
      setClick(click + 1);
    }
  }, [show]);

  return (
    <div>
      {/* <h1>No of clicks :{click}</h1>
      <h1>Five Fold:{fiveFold}</h1>
      <h1>Seven Fold:{tenFold}</h1>
      <p>
        <button onClick={handleClick}>Click </button>
      </p> */}
      <h1>Toggle Other COmponent</h1>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} </button>
      {show ? <OtherComponent click={click} /> : null}
    </div>
  );
};

const OtherComponent = ({ click }) => {
  const [postion, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      // x: event.clientX, y: event.clientY
      console.log("Current Click ", click);
      console.log("x: ", e.clientX);
      console.log("y: ", e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
      console.log("Current Mouse Position");
    });

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <h1>
      {click}: Mouse Postion {postion.x},{postion.y}
    </h1>
  );
};

export default UseEffectComponent;
