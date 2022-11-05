import React from "react";
import { useState } from "react"
import "../App.css"


const ErrorButton = () => {
// setting the state of the error
  const [error, setError] = useState(false);

 // handling error button click event 
  const handleClick = () => {
    setError(true);
  }

  // throw string if error is successful
  if (error) throw new Error("Error Boundary Test Successful!");

  // render the error buttom
  return (
    <div className="err-button">
    <button  onClick={handleClick}>Throw Error</button>
      </div>
  )
}

export default ErrorButton;