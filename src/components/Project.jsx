import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const fetchRepos = async () => {
        setLoading(true)
        const response = await axios.get('https://api.github.com/users/missbaah/repos')
        setRepos(response.data);
        setLoading(false)
      }
      fetchRepos()
    }, []
  )

  const { projectId } = useParams();
  // console.log(repos)
  const project = repos.find(repo => repo.id == projectId);
  const {name, html_url, forks, stargazers_count, updated_at} = project || {};

  return (
    <>
      <h2>{name}</h2>
      <section className="data-box">
      <div className="details">Stars: <span className="deets">{stargazers_count}</span></div>
      <div className="details">Forks: <span className="deets">{forks}</span></div>
      <div className="details">Last Update: <span className="deets">{updated_at}</span></div>
      <a  className="details" href={html_url} target="_blank">Visit Source Code</a>
        </section>
      <Link className="home" to="/repos">Back to Repos</Link>
    </>
  )
}

export default Project;