import React, { useRef, useState } from "react";

// UseRef
// Refrence html
// use ref dous not trigger a render.
// const var=useRef('initali value')
// Html is not update but the ref will be updated.
// get the syntax= var.current=value
// set the value =var.current=342

const UseRefComponent = () => {
  // [destrurcture the array]=usestate(intial value)

  const [click, setClick] = useState(0);

  const refClick = useRef(0);

  const btnRef = useRef(null);

  console.log("UseStateComponent Rendered");

  function handleClick() {
    console.log("Handle Click");
    let new_state = click + 1;
    setClick(new_state);
  }

  function handleRefClick() {
    let new_ref_state = refClick.current + 1;
    refClick.current = new_ref_state;
    console.log(btnRef);
    btnRef.current.click();
  }

  return (
    <div>
      <h1>No of clicks :{click}</h1>
      <h1>No of Ref Click:{refClick.current}</h1>
      <p>
        <button ref={btnRef} onClick={handleClick}>
          Click Me
        </button>
      </p>
      <p>
        <button onClick={handleRefClick}>Handle ref Click </button>
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

export default UseRefComponent;
