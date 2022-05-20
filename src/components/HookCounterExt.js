import React, { useState } from "react";

function HookCounterExt() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  let incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  let decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  let resetCount = () => {
    setCount(initialCount);
  };

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <br></br>
      <br></br>
      <button onClick={incrementCount}>Increment</button>
      <br></br>
      <br></br>
      <button onClick={decrementCount}>Decrement</button>
      <br></br>
      <br></br>
      <button onClick={resetCount}>Reset</button>
      <br></br>
      <br></br>
      <button onClick={incrementFive}>Inrement Five</button>
    </div>
  );
}

export default HookCounterExt;
