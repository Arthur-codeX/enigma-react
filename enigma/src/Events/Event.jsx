// Example of a button.
// when using the useState hook you need to import it from react

import React, { useState } from "react";

//When someone clicks the button call a handlefunction.

const Event = () => {
  function handleClickMe() {
    console.log("Button clicked");
  }

  // Not to do

  return (
    <div>
      {/* Recomended Way */}
      <p>
        <button onClick={handleClickMe}>Click Me</button>
      </p>
      {/* Below another way not recomended */}
      <p>
        <button
          onClick={function handleClickMe() {
            console.log("Button clicked");
          }}
        >
          Click Me
        </button>
      </p>
      {/* Wrong */}
      <p>
        <button onClick={handleClickMe()}>Click Me</button>
      </p>
    </div>
  );
};

export default Event;
