function EducationCard({school, degree, program, description, startDate, endDate}) {
    return (
        <div className="card-child">
            <h3>{school}</h3>
            <h4>{degree}, {program}</h4>
            <h5>{startDate} - {endDate}</h5>
            <p>{description}</p>
        </div>
    );
  }

  export default EducationCard;
