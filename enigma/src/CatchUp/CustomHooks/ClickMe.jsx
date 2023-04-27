import React, { useState } from "react";

import useClick from "./useClick";

import useClick2 from "./useClick2";

const ClickMe = () => {
  const { click, incrementClick, decrementClick, resetClick } = useClick();

  //   const [k, setK] = useState(0);
  const [no, inc, dec, res] = useClick2();

  return (
    <>
      <div>
        <h1>No of clicks :{click}</h1>
        <p>
          <button onClick={incrementClick}>Increment</button>
          <button onClick={resetClick}>Reset</button>
          <button onClick={decrementClick}>Decrement</button>
        </p>
      </div>
      <div>
        <div>
          <h1>No of clicks 2 :{no}</h1>
          <p>
            <button onClick={inc}>Increment</button>
            <button onClick={res}>Reset</button>
            <button onClick={dec}>Decrement</button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ClickMe;
