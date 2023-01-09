function JobCard({title, company, location, url, startDate, endDate, description, image}) {

    const descriptionList =
        <div>
        <ul>{description.map(item => <li key={item}> {item} </li>)}</ul>
        </div>;

    return (
        <div className="card-child">
            {image ? <img src={image}/> : null}
            <h3>{title}</h3>
            <a href={url} target="_blank" className="card-child-link-text">{company}</a>
            <h4>{location}</h4>
            <h5>{startDate} - {endDate}</h5>
            <p className="project-list">{descriptionList}</p>
        </div>
    );
  }

  export default JobCard;
