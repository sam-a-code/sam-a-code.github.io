function JobCard({title, company, location, url, startDate, endDate, description, image}) {
    return (
        <div className="card-child">
            {image ? <img src={image}/> : null}
            <h3>{title}</h3>
            <a href={url} target="_blank">{company}</a>
            <h4>{location}</h4>
            <h5>{startDate} - {endDate}</h5>
            <p>{description}</p>
        </div>
    );
  }

  export default JobCard;
