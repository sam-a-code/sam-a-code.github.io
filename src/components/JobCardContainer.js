// import JobCard from "./JobCard";
import React, {useState, useEffect} from "react";


function JobCardContainer() {

    //add back in when update backend
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

    // "see more" button states for job details
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
                    <img src="https://i.imgur.com/Aka9SbV.png" alt="studio logo"/>
                    <h3>Operations Associate</h3>
                    <a href="https://studio.com" target="_blank" className="card-child-link-text">Studio</a>
                    <h4>Remote</h4>
                    <h5>January 2022 - August 2022</h5>
                    { !viewStudio ? <button onClick={seeMoreStudio}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreStudio}>Close</button>}
                    { viewStudio ?
                        <ul className="project-list">
                            <li>Program managed the implementation of new class content and curriculum on the Studio website, working cross-functionally to empower students to tackle new creative endeavors.</li>
                            <li>Launched classes, supported company rebranding, and executed new product initiatives in collaboration with multiple engineering teams, the curriculum team, the marketing team, and the post-production team.</li>
                            <li>Discovered, resolved and escalated bugs through QA process. Managed a Quality Assurance associate, created process documentation for QA, and tracked bug resolutions for historical knowledge.</li>
                        </ul>
                    : null }
                </div>
                <div className="job-card-child">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube logo"/>
                    <h3>Operations Specialist</h3>
                    <a href="https://youtube.com" target="_blank" className="card-child-link-text">YouTube</a>
                    <h4>Los Angeles</h4>
                    <h5>April 2019 - July 2021</h5>
                    { !viewYT1 ? <button onClick={seeMoreYT1}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreYT1}>Close</button>}
                    { viewYT1 ?
                        <ul className="project-list">
                            <li>Program managed the e-learning tool used across YouTube Spaces globally, ensuring creators could access Spaces.</li>
                            <li>Improved tool experiences for internal and external users by managing a group of 20+ subject matter experts on event and e-learning tools, leveraging team insights to enhance user journeys.</li>
                            <li>Led a bi-weekly bug review, coordinated the quarterly prioritization of feature requests, worked with engineers to resolve tickets, and conducted UAT for tool updates.</li>
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
                            <li>Executed registration, security, and check in processes for approx. 10 - 15 events per month at YouTube Space LA.</li>
                            <li>Trained team on internal tools and processes, product updates, and security procedures to protect attendee data.</li>
                            <li>Analyzed data, maintained data integrity, led data clean-up initiatives, and leveraged analytic insights to improve events.</li>
                        </ul>
                    : null }
                </div>
                <div className="job-card-child">
                    <img src="https://www.theheartseries.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-12-at-2.14.47-PM.png" alt="the heart series logo"/>
                    <h3>Program Manager</h3>
                    <a href="https://theheartseries.com" target="_blank" className="card-child-link-text">The Heart Series</a>
                    <h4>Los Angeles</h4>
                    <h5>February 2015 - February 2020</h5>
                    { !viewTHS ? <button onClick={seeMoreTHS}>Read more about my responsibilities in this role</button> : <button onClick={seeMoreTHS}>Close</button>}
                    {viewTHS ?
                        <ul className="project-list">
                            <li>Orchestrated the volunteer program for this social impact conference, spearheaded communications, training sessions, and placements for 30+ volunteers.</li>
                            <li>Supervised multiple registration and check-in stations for 200+ attendees, speakers, press, VIPs, and vendors.</li>
                            <li>Project managed on-site operations of volunteers and vendors.</li>
                        </ul>
                    : null }
                </div>
            </div>
            <br></br>
            <button className="see-more-button" onClick={seeResume}>See resume</button>
        </div>


        {/* add back in when update backend */}
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
