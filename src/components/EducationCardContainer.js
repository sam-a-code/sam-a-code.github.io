import EducationCard from "./EducationCard";
import React, {useState, useEffect} from "react";


function EducationCardContainer() {
    const [education, setEducation] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/education')
        .then((r) => r.json())
        .then((education) => setEducation(education))
        }, [])

    const educationList = education.map((school) => {
        return (
            <EducationCard
            key={school.id}
            school={school.school}
            degree={school.degree}
            program={school.program}
            description={school.description}
            startDate={school.startDate}
            endDate={school.endDate}
            />
        ) })

        function seeResume () {
            window.location.href = '/resume'
        }

    return (
        <div>
            <h1 className="section-header">Education</h1>
            <ul className="card-parent">
            {educationList}
            </ul>
            <button onClick={seeResume}>See resume</button>
        </div>
    );
  }

  export default EducationCardContainer;
