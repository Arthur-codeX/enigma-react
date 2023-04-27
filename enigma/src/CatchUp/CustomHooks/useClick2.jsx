import React, { useState } from "react";
//Custom Hook.
// use<Custom hook name>
// Have access to the other hooks.

const useClick2 = () => {
  const [click, setClick] = useState(0);

  function handleClickChange(param) {
    setClick(param);
  }

  function incrementClick() {
    setClick(click + 1);
  }

  function decrementClick() {
    setClick(click - 1);
  }

  function resetClick() {
    setClick(0);
  }

  return [click, incrementClick, decrementClick, resetClick, handleClickChange];
};

export default useClick2;
