// create a component name button that takes two props -'text" and "onclick " the component shold display a button element with the given text and call the onclick function when clicked
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
