// import EducationCard from "./EducationCard";
import React, {useState, useEffect} from "react";


function EducationCardContainer() {
    // Add back in when update backend
    // const [education, setEducation] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3000/education')
    //     .then((r) => r.json())
    //     .then((education) => setEducation(education))
    //     }, [])

    // const educationList = education.map((school) => {
    //     return (
    //         <EducationCard
    //         key={school.id}
    //         school={school.school}
    //         degree={school.degree}
    //         program={school.program}
    //         description={school.description}
    //         startDate={school.startDate}
    //         endDate={school.endDate}
    //         />
    //     ) })

        function seeResume () {
            window.location.href = '/resume'
        }

    return (
        <>
         <div>
            <h1 className="section-header">Education</h1>
            <div className="card-parent">
                <div className="card-child">
                    <h3>Boston University</h3>
                    <h4>Masters of Science, Media Ventures</h4>
                    <h5>September 2014 - August 2015</h5>
                    <p>Entrepreneurship, technology, and communications.</p>
                </div>
                <div className="card-child">
                    <h3>Boston University</h3>
                    <h4>Bachelor of Arts, Psychology</h4>
                    <h5>September 2009 - January 2014</h5>
                    <p>Cognition, Developmental Psychology, and Social Psychology.</p>
                </div>
                <div className="card-child">
                    <h3>Flatiron Software Engineering Bootcamp</h3>
                    <h4>Certification</h4>
                    <h5>August 2022 - December 2022</h5>
                    <p>Full Stack Software Engineering</p>
                </div>

            </div>
            <br></br>
            <button className="see-more-button" onClick={seeResume}>See resume</button>
        </div>



        {/* add back in with backend
        <div>
            <h1 className="section-header">Education</h1>
            <ul className="card-parent">
            {educationList}
            </ul>
            <button onClick={seeResume}>See resume</button>
        </div> */}
        </>

    );
  }

  export default EducationCardContainer;
