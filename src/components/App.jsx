//import React from "react";
import React, { useState } from "react";

function App() {
  // const state = useState(1);
  // console.log(state);

  // const RGB = [11, 2, 3];
  // const [red, green, blue] = [11, 2, 3]; //destructure example
  // console.log(red);

  const [countFromHook, setCount] = useState(0); //setCount is the function.

  function increase() {
    //count++;
    setCount(countFromHook + 1);
  }

  function decrease() {
    //count++;
    setCount(countFromHook - 1);
  }

  return (
    <div className="container">
      {/* <h1>{count}</h1> */}
      {/* <h1>{state[0]}</h1> */}
      <h1>{countFromHook}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
