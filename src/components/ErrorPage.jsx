import React from "react";
import ErrorButton from "./ErrorButton.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx"
import "../App.css"

const ErrorPage = () => {
  return (
    <div>
      <h2>Error Boundary Test</h2>
      <p className="p-body">When the button is clicked, it shows throws and error and shows a fallback UI to prevent the entire component tree from unmounting</p>
      <ErrorBoundary>
        <ErrorButton />
      </ErrorBoundary>
    </div>
  )
}

export default ErrorPage;