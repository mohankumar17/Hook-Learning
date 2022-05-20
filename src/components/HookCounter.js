import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Hook Count: {count}</p>
      <button onClick={incrementCount}>Click</button>
    </div>
  );
}

export default HookCounter;
