import React from "react";
import Person from "./component/Person";
import Button from "./component/Button";
import Header from "./component/Header";
import List from "./component/List";
import Hooks from "./Hooks";

function App() {
  const handleClick = () => {
    alert("button clicked ");
  };
  const items = ["a", "b", "c", "d", "e"];
  return (
    <>
      <Header title="Welcome to my website !" />
      <Person name="Ashish prabhakar" age={20} />
      <Button text="Click me" onClick={handleClick} />
      <List items={items} />
      <Hooks />
    </>
  );
}

export default App;
