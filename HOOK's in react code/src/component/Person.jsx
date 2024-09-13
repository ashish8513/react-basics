// create a component name "person" that takes twp props-"name" and "age" the component should display the persons name and age in a paragraph element in react.

import React from "react";

function Person({ name, age }) {
  return (
    <div>
      <p style={{alignItems:"center", justifyContent:"center"}}>
        my name is {name} and my age is {age}
      </p>
    </div>
  );
}

export default Person;
