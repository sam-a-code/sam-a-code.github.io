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

    function seeResume () {
        window.location.href = '/resume'
    }
    return (
        <>
        <div>
            <h1 className="section-header">Work History</h1>
            <div className="card-parent">
                <div className="card-child">
                    {/* <img src={image}/> */}
                    <h3>Operations Associate</h3>
                    <a href="https://studio.com" target="_blank" className="card-child-link-text">Studio</a>
                    <h4>Remote</h4>
                    <h5>January 2022 - August 2022</h5>
                    <ul className="project-list">
                    <li>Program managed the lifecycle of new class content and curriculum, implementing new classes on the consumer-facing Studio website using VS Code and ensuring cross-functional teams were aligned on deliverables throughout the process.</li>
                    <li>Executed class launches, company rebranding, and new product initiatives with multiple engineering teams, the curriculum team, the marketing team, and the post-production team.</li>
                    <li>Managed a freelance Quality Assurance associate. Conducted the hiring process, created software walkthrough documentation, used technical judgment for bug triage, and escalated issues to Engineering as needed.</li>
                    </ul>
                </div>
                <div className="card-child">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
                    <h3>Operations Specialist</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>April 2019 - July 2021</h5>
                    <ul className="project-list">
                    <li>Program managed the e-learning tool used across YouTube Spaces globally, maintaining content and user processes.</li>
                    <li>Managed a global group of 20+ subject matter experts to identify work problems and goals for Google’s event, e-learning, and finance tools.</li>
                    <li>Led bi-weekly bug review and quarterly prioritization of feature requests and bugs, working with engineers to resolve tickets and improve user experiences for users at all YouTube Spaces. Conducted UAT for engineers as necessary.</li>
                    <li>Developed documentation for user roadmaps, tools training, FAQs, SOPs, onboarding, and institutional knowledge.</li>
                    </ul>
                </div>
                <div className="card-child">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/>
                    <h3>Events Specialist (Data Analyst)</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>May 2016 - April 2019</h5>
                    <ul className="project-list">
                    <li>Executed multiple processes and workflows for approx. 10 - 15 events per month at YouTube Space LA.</li>
                    <li>Trained team on internal tools and processes, product updates, and security procedures to protect attendee data.</li>
                    <li>Analyzed data, maintained data integrity, led data clean-up initiatives, and leveraged analytic insights to improve events.</li>
                    </ul>
                </div>
                <div className="card-child">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"/> */}
                    <h3>Program Manager</h3>
                    <a href="https://theheartseries.com" target="_blank" className="card-child-link-text">The Heart Series</a>
                    <h4>Los Angeles</h4>
                    <h5>February 2015 - February 2020</h5>
                    <ul className="project-list">
                    <li>Orchestrated the volunteer program for this social impact conference, spearheaded communications, training sessions, and placements for 30+ volunteers.</li>
                    <li>Supervised multiple workflows and check-in stations for 200+ attendees, speakers, and press.</li>
                    <li>Project managed on-site operations of volunteers and vendors.</li>
                    </ul>
                </div>
            </div>
            <button onClick={seeResume}>See resume</button>
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
