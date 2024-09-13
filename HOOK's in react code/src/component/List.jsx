// create a component nameed "list " take one prop "items " the component should display an unorderd list element with given list itmes


import React from "react";

function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
