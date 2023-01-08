import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { LinearProgress } from "@mui/material";
import "../App.css"


const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const fetchUser = async () => {
        setLoading(true)
        const response = await axios.get('https://api.github.com/users/missbaah')
        setUser(response.data);
        setLoading(false)
      }
      fetchUser()
    }, []
  )

  if (loading) {
    return <div>
      <h2>Loading</h2>
      <LinearProgress />
    </div>
  }

  return (
    <section>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This page is the home page containing introductory info" />
        <link rel="canonical" href="/home" />
      </Helmet>


      <div className="intro-container">
        <div className="box-A">

          <img src={user.avatar_url} alt="image of the user" loading="eager" title="Image of Adwoa Baah Addo-Brako" width="460" height="460" />
          <h1 className="intro">Hello 👋,  I'm {user.name} </h1>
        </div>
        <section className="box-B">
          <div className="user-bio">{user.bio}</div>
          <div className="stats">
            <div className="stat"><span className="bold">{user.public_repos}</span> repositories</div>
            <div className="stat"><span className="bold">{user.followers}</span> followers</div>
            <div className="stat"><span className="bold">{user.following}</span> following</div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home;