import React, { useEffect, useState } from "react";

function UseEffectHookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Event");
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    console.log("use effect hook");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Mouse Move Unmounted");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  /*In the above useEffect(), second argument is given empty
  So, this effect will be called only once and will not be 
  called again and again after re-rendering the component as well*/

  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default UseEffectHookMouse;
