import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function JobCardContainer() {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
        .then((r) => r.json())
        .then((jobs) => setJobs(jobs))
        }, [])

    const jobsList = jobs.map((job) => {
        return (
            <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            url={job.url}
            startDate={job.startDate}
            endDate={job.endDate}
            description={job.description}
            image={job.image}
            />
        ) })

    return (
        <div>
            <h1 className="section-header">Work History</h1>
            <ul className="card-parent">
            {jobsList}
            </ul>
        </div>
    );
  }

  export default JobCardContainer;
