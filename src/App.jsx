import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import { Repos, Home, NotFound, ErrorPage, Project } from "./components"

export default function App() {
  return (
    <main>
      <nav className="main-nav">
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/repos">Repos</Link>
        <Link className="nav-link" to="/error">Error Boundary</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="repos/*" element={<Repos />} />
        <Route path="repos/:projectId" element={<Project />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}
