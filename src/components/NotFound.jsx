import React from "react";
import { Helmet } from "react-helmet-async";
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
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
      <p className="err-title">Oops !</p>
    <br/>
      <p className="err-body">Looks like the page you are looking for cannont be found</p>
     <Link className="home" to="/home">Back to Home <FontAwesomeIcon icon={faArrowRight} /></Link>
     
    </section>
     
   
  )
}

export default NotFound;