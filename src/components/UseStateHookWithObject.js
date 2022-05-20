import React, { useState } from "react";

function UseStateHookWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  let handleFirsNameChange = (event) => {
    setName((prevName) => {
      return { firstName: event.target.value, lastName: prevName.lastName };
    });
  };
  let handleLastNameChange = (event) => {
    setName((prevName) => {
      return { firstName: prevName.firstName, lastName: event.target.value };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={handleFirsNameChange}
          placeholder="First Name"
        ></input>
        <br></br>
        <br></br>
        <input
          type="text"
          value={name.lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
        ></input>
        <h2>First Name - {name.firstName}</h2>
        <h2>Last Name - {name.lastName}</h2>
      </form>
    </div>
  );
}

export default UseStateHookWithObject;
