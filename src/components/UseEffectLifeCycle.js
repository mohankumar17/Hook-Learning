import React, { useEffect, useState } from "react";

function UseEffectLifeCycle() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("use effect hook");
    document.title = `Clicked ${count} times`;
  }, [count]);
  //useEffect second argument is can be a state or prop value.
  //So, in the above useEffect() since count is the second argument
  //useEffect() will be executed only if count value changes

  let handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  let handleChange = (event) => {
    setName(() => {
      return event.target.value;
    });
  };

  return (
    <div>
      <p> Clicked {count} Times</p>
      <button onClick={handleClick}>Click</button>
      <br></br>
      <br></br>
      <input type="text" value={name} onChange={handleChange}></input>
    </div>
  );
}

export default UseEffectLifeCycle;
