import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"
import '../App.css';
import Pagination from "./Pagination.jsx"
import Project from "./Project.jsx"
import {Helmet} from "react-helmet-async"

const Repos = () => {
  // setting states 
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(3);

  // fetching the data from the API using axios
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



  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  // limiting the number of repos per page
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);


  // looping throught the repos to create a list item of each repo
  const listOfProjects = currentRepos.map((repo) => {
    return (
      <li className="card" key={repo.id}>
        <Link className="card-link" to={`/repos/${repo.id}`}>
          <div className="name">
            {repo.name}
          </div>
          <br />
          <div className="lang" >
            {repo.language ? `Prominent Languge: ${repo.language}` : "Language: None"}
          </div>
          <br />
          <div className="contributors" >
            Contributors: @{repo.owner.login}
          </div>
        </Link>
      </li>)
  });

  // Create paginate function
  const paginate = (num) => setCurrentPage(num);
  if (loading) {
    return <h2>Loading</h2>
  }

  return (
    <>
      <Helmet>
        <title>Repos</title>
        <meta name="description" content="Here is a list of Repos for the user's github profile"/>
        <link rel="canonical" href="/repos" />
      </Helmet>
      
      <h2>GitHub Repositories</h2>
      {/*renders an unordered list of repos*/}
      <ul>
        {listOfProjects}
      </ul>
      {/*renders the pagination component*/}
      <Pagination reposPerPage={reposPerPage} totalRepos={repos.length} paginate={paginate} />
      {/*nested route to individual repos*/}
      <Routes>
        <Route path=":id" element={<Project />} />
      </Routes>

    </>
  )

}

export default Repos;