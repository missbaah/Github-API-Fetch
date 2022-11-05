import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
    return <h2>Loading</h2>
  }

  return (
    <section>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This page is the home page containing introductory info" />
        <link rel="canonical" href="/home" />
      </Helmet>


      <h1 className="intro">Hello 👋,  I'm {user.name} </h1>
      <div className="intro-container">
        <img src={user.avatar_url} alt="image of the user" loading="eager" title="Image of Adwoa Baah Addo-Brako" width="460" height="460" />
        <section className="intro-right">
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