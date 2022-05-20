import React, { useState } from "react";

function UseStateWithArray() {
  const [items, setItems] = useState([]);

  //   const addItem = () => {
  //     setItems([
  //       ...items,
  //       {
  //         id: items.length,
  //         value: Math.floor(Math.random() * 10) + 1,
  //       },
  //     ]);
  //   };

  const addItem = () => {
    setItems((prevItems) => {
      let newItemList = [...prevItems];
      newItemList.push({
        id: prevItems.length,
        value: Math.floor(Math.random() * 10) + 1,
      });
      //console.log(prevItems);
      return newItemList;
    });
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((eachItem) => {
          return <li key={eachItem.id}>{eachItem.value}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseStateWithArray;
