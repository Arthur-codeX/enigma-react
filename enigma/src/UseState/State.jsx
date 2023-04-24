// Example of a button.
// when using the useState hook you need to import it from react

// Any variable that you want to track state changes on.
// state changes in react. React renders the component.

// const [var,function_tied_to_var<Responsible for state change>]=useState(<Initial Value>)

// to set a new state you pass it as a parameter tot the second variable in useState
// useRef,useEffect <custom hooks in react/>

import React, { useState } from "react";

const State = () => {
  const [click, setClick] = useState(0);

  function handleClickMe() {
    console.log(`Button was clicked: ${click}`);
    // clicks = clicks + 1;
    console.log(click);

    // setClick("Cows and Dockeys");
    // let newnum = click + 1;
    // setClick(newnum);

    // Update State in react// Passign a function will coint the old value
    // Whatever the function returns is going to be the new state

    // Asynchoius.

    setClick(function (old) {
      // console.log(old);
      // return "Cows and Dockeys";
      return old + 1;
    });
  }

  console.log("This is the state component");

  return (
    <div>
      <p>no of clicks {click}</p>
      <p>
        <button onClick={handleClickMe}>Click Me</button>
      </p>
      <BadPlayer player_name={"HArry Maguire"} own={click} />
    </div>
  );
};

const BadPlayer = ({ player_name, own }) => {
  //{ player_name, own }=props
  return (
    <p>
      {player_name} is a good player no of own goals {own}
    </p>
  );
};

export default State;
