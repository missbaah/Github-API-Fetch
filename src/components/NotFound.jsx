import React from "react";
import "../App.css"

const NotFound = () => {
   return (
    <section className="err-container">
      <div className="err">404</div>
      <p className="err-body">Looks like the page you are looking for does not exist</p>
    </section>
  )
}

export default NotFound;