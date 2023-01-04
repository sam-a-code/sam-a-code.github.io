function EducationCard({school, degree, program, description, startDate, endDate}) {
    return (
        <>
            <h3>{school}</h3>
            <h3>{degree}</h3>
            <h3>{program}</h3>
            <h5>{startDate} - {endDate}</h5>
            <h5>{description}</h5>
        </>
    );
  }

  export default EducationCard;
