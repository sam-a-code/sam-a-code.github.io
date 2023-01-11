// import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function JobCardContainer() {
    // const [jobs, setJobs] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/jobs')
    //     .then((r) => r.json())
    //     .then((jobs) => setJobs(jobs))
    //     }, [])

    // const jobsList = jobs.map((job) => {
    //     return (
    //         <JobCard
    //         key={job.id}
    //         title={job.title}
    //         company={job.company}
    //         location={job.location}
    //         url={job.url}
    //         startDate={job.startDate}
    //         endDate={job.endDate}
    //         description={job.description}
    //         image={job.image}
    //         />
    //     ) })

    const [viewStudio, setViewStudio] = useState(false)
    function seeMoreStudio() {
        setViewStudio(!viewStudio)
    }
    const [viewYT1, setViewYT1] = useState(false)
    function seeMoreYT1() {
        setViewYT1(!viewYT1)
    }
    const [viewYT2, setViewYT2] = useState(false)
    function seeMoreYT2() {
        setViewYT2(!viewYT2)
    }
    const [viewTHS, setViewTHS] = useState(false)
    function seeMoreTHS() {
        setViewTHS(!viewTHS)
    }

    function seeResume () {
        window.location.href = '/resume'
    }
    return (
        <>
        <div>
            <h1 className="section-header">Work History</h1>
            <div className="job-card-parent">
                <div className="job-card-child">
                    <img src="https://studio.com/logos/studio_logo_black.png"/>
                    <h3>Operations Associate</h3>
                    <a href="https://studio.com" target="_blank" className="card-child-link-text">Studio</a>
                    <h4>Remote</h4>
                    <h5>January 2022 - August 2022</h5>
                    { !viewStudio ? <button onClick={seeMoreStudio}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreStudio}>Close</button>}
                    { viewStudio ?
                        <ul className="project-list">
                            <li>Program managed the lifecycle of new class content and curriculum, implementing new classes on the consumer-facing Studio website using VS Code and ensuring cross-functional teams were aligned on deliverables throughout the process.</li>
                            <li>Executed class launches, company rebranding, and new product initiatives with multiple engineering teams, the curriculum team, the marketing team, and the post-production team.</li>
                            <li>Managed a freelance Quality Assurance associate. Conducted the hiring process, created software walkthrough documentation, used technical judgment for bug triage, and escalated issues to Engineering as needed.</li>
                        </ul>
                    : null }
                </div>
                <div className="job-card-child">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
                    <h3>Operations Specialist</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>April 2019 - July 2021</h5>
                    { !viewYT1 ? <button onClick={seeMoreYT1}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreYT1}>Close</button>}
                    { viewYT1 ?
                        <ul className="project-list">
                            <li>Program managed the e-learning tool used across YouTube Spaces globally, maintaining content and user processes.</li>
                            <li>Managed a global group of 20+ subject matter experts to identify work problems and goals for Google’s event, e-learning, and finance tools.</li>
                            <li>Led bi-weekly bug review and quarterly prioritization of feature requests and bugs, working with engineers to resolve tickets and improve user experiences for users at all YouTube Spaces. Conducted UAT for engineers as necessary.</li>
                            <li>Developed documentation for user roadmaps, tools training, FAQs, SOPs, onboarding, and institutional knowledge.</li>
                        </ul>
                    : null}

                    <h3>Events Specialist (Data Analyst)</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>May 2016 - April 2019</h5>
                    { !viewYT2 ? <button onClick={seeMoreYT2}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreYT2}>Close</button>}
                    {viewYT2 ?
                        <ul className="project-list">
                            <li>Executed multiple processes and workflows for approx. 10 - 15 events per month at YouTube Space LA.</li>
                            <li>Trained team on internal tools and processes, product updates, and security procedures to protect attendee data.</li>
                            <li>Analyzed data, maintained data integrity, led data clean-up initiatives, and leveraged analytic insights to improve events.</li>
                        </ul>
                    : null }
                </div>
                {/* <div className="job-card-child">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
                    <h3>Events Specialist (Data Analyst)</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>May 2016 - April 2019</h5>
                    { !viewYT2 ? <button onClick={seeMoreYT2}>Read more about my responsibilities at this job</button> : <button onClick={seeMoreYT2}>Close</button>}
                    {viewYT2 ?
                        <ul className="project-list">
                            <li>Executed multiple processes and workflows for approx. 10 - 15 events per month at YouTube Space LA.</li>
                            <li>Trained team on internal tools and processes, product updates, and security procedures to protect attendee data.</li>
                            <li>Analyzed data, maintained data integrity, led data clean-up initiatives, and leveraged analytic insights to improve events.</li>
                        </ul>
                    : null }
                </div> */}
                <div className="job-card-child">
                    <img src="https://www.theheartseries.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-12-at-2.14.47-PM.png"/>
                    <h3>Program Manager</h3>
                    <a href="https://theheartseries.com" target="_blank" className="card-child-link-text">The Heart Series</a>
                    <h4>Los Angeles</h4>
                    <h5>February 2015 - February 2020</h5>
                    { !viewTHS ? <button onClick={seeMoreTHS}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreTHS}>Close</button>}
                    {viewTHS ?
                        <ul className="project-list">
                            <li>Orchestrated the volunteer program for this social impact conference, spearheaded communications, training sessions, and placements for 30+ volunteers.</li>
                            <li>Supervised multiple workflows and check-in stations for 200+ attendees, speakers, and press.</li>
                            <li>Project managed on-site operations of volunteers and vendors.</li>
                        </ul>
                    : null }
                </div>
            </div>
            <br></br>
            <button className="see-more-button" onClick={seeResume}>See resume</button>
        </div>


        {/* add back in when set up backend */}
        {/* <div>
            <h1 className="section-header">Work History</h1>
            <ul className="card-parent">
            {jobsList}
            </ul>
            <button onClick={seeResume}>See resume</button>
        </div> */}
        </>
    );
  }

  export default JobCardContainer;
