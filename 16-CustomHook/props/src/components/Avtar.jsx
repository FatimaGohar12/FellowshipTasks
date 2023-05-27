import React from "react";
// these are all props passing in components
// Step 1: Pass props to the child component 
// First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number):
export default function Avtar() {

    return (
        
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}

        
      />
    );
  }
  




