// Hooks: Used to add state, manage side effects, and more inside function components.
import React, { useState } from "react";

function Hooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Hooks;
