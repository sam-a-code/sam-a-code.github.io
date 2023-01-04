function JobCard({title, company, location, url, startDate, endDate, description, image}) {
    return (
        <>
            {image ? <img src={image}/> : null}
            <h3>{title}</h3>
            <a href={url} target="_blank">{company}</a>
            <h3>{location}</h3>
            <h5>{startDate} - {endDate}</h5>
            <h5>{description}</h5>
        </>
    );
  }

  export default JobCard;
