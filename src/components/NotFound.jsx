import React from "react";
import { Helmet } from "react-helmet-async";
import "../App.css"

const NotFound = () => {
   return (
    <section className="err-container">
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content="This is the 404 error page for this site"/>
        <link rel="canonical" href="*" />
      </Helmet>
      
      <div className="err">404</div>
      <p className="err-body">Looks like the page you are looking for does not exist</p>
    </section>
  )
}

export default NotFound;