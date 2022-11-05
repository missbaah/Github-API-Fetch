import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
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


  
   return (
    <section>
      <h1 className="intro">Hello 👋,  I'm {user.name} </h1>
      <div className="intro-container">
        <img src={user.avatar_url} />
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