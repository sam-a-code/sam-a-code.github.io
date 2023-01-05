function CodingProjectCard({title, oneLiner, url, demo, githubUrl, githubUrl2, createdDate, skills, description, commentary}) {


    // const skillsList = () => (
    //     <div>
    //       <ul>{skills.map(skill => <li key={skill}> {skill} </li>)}</ul>
    //     </div>
    //   );

    return (
        <div className="card-child">
            <h3>{title}</h3>
            {title ? <h4>{oneLiner}</h4> : null}
            {url ? <a href={url} target="_blank">See the project here!</a> : null}
            {demo ? <a href={demo} target="_blank">Watch the demo</a> : null}
            {githubUrl ? <a href={githubUrl} target="_blank">Github link</a> : null}
            {githubUrl2 ? <a href={githubUrl2} target="_blank">Secondary github link</a> : null}
            {createdDate ? <h4>{createdDate}</h4> : null}
            {skills ? <h4>Skills used for project: {skills}</h4> : null}
            {description ? <h3>{description}</h3> : null}
            {commentary ? <p>{commentary}</p> : null}
        </div>
    );
  }

  export default CodingProjectCard;
