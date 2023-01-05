import CodingProjectCard from "./CodingProjectCard";
import React, {useState, useEffect} from "react";


function CodingProjectContainer() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/technical-projects')
        .then((r) => r.json())
        .then((projects) => setProjects(projects))
        }, [])

    const projectList = projects.map((project) => {
        return (
            <CodingProjectCard
            key={project.id}
            title={project.title}
            oneLiner={project.oneLiner}
            url={project.url}
            demo={project.demoUrl}
            githubUrl={project.githubUrl}
            githubUrl2={project.githubUrl2}
            createdDate={project.createdDate}
            skills={project.skills}
            description={project.description}
            commentary={project.commentary}
            />
        ) })

    return (
        <div className="coding-project-section">
            <h1 className="section-header">Coding Projects</h1>
            <ul className="card-parent">
            {projectList}
            </ul>
        </div>
    );
  }

  export default CodingProjectContainer;
