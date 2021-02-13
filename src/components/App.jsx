//import React from "react";
import React, { useState } from "react";

function App() {
  // const state = useState(1);
  // console.log(state);

  // const RGB = [11, 2, 3];
  // const [red, green, blue] = [11, 2, 3]; //destructure example
  // console.log(red);

  // const [countFromHook, setCount] = useState(0); //setCount is the function.

  // function increase() {
  //   //count++;
  //   setCount(countFromHook + 1);
  // }

  // function decrease() {
  //   //count++;
  //   setCount(countFromHook - 1);
  // }

  // return (
  //   <div className="container">
  //     {/* <h1>{count}</h1> */}
  //     {/* <h1>{state[0]}</h1> */}
  //     <h1>{countFromHook}</h1>
  //     <button onClick={increase}>+</button>
  //     <button onClick={decrease}>-</button>
  //   </div>
  // );

  const time = new Date().toLocaleTimeString();

  const [timeHook, setTime] = useState(time);

  function getTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  setInterval(getTime, 1000); //Increase time every second without the button click.

  return (
    <div className="container">
      <h1>{timeHook}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}
//
export default App;
