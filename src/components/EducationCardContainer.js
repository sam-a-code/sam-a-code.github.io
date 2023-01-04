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
            school={school.title}
            degree={school.degree}
            program={school.program}
            description={school.description}
            startDate={school.startDate}
            endDate={school.endDate}
            />
        ) })

    return (
        <>
            <h1>EducationCardContainer</h1>
            <ul>
            {educationList}
            </ul>
        </>
    );
  }

  export default EducationCardContainer;
