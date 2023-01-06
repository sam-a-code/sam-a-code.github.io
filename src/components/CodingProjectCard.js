function CodingProjectCard({title, oneLiner, url, demo, githubUrl, githubUrl2, createdDate, skills, description, commentary, image}) {

    const alphaSkills = skills.sort()
    const skillsList =
        <div>
          <ul>{alphaSkills.map(skill => <li key={skill}> {skill} </li>)}</ul>
        </div>;

    const descriptionList =
        <div>
        <ul>{description.map(item => <li key={item}> {item} </li>)}</ul>
        </div>;

    const commentaryList =
        <div>
        <ul>{commentary.map(item => <li key={item}> {item} </li>)}</ul>
        </div>;

console.log(image)
    return (
        <div className="card-child">
            {/* <img src={image}/> */}
            <h3>{title}</h3>
            {title ? <h4>{oneLiner}</h4> : null}
            {url ? <><a href={url} target="_blank">See the project here!</a><br></br> </> : null}
            {demo ? <><a href={demo} target="_blank">Watch the demo</a><br></br></> : null}
            {githubUrl ? <><a href={githubUrl} target="_blank">Github link</a><br></br></> : null}
            {githubUrl2 ? <><a href={githubUrl2} target="_blank">Secondary github link</a><br></br></> : null}
            {createdDate ? <h4>Created: {createdDate}</h4> : null}
            {description ? <p className="project-list">Description: {descriptionList}</p> : null}
            {commentary ? <p className="project-list">My commentary: {commentaryList}</p> : null}
            {skills ? <p className="project-list">Skills used for project: {skillsList}</p> : null}
        </div>
    );
  }

  export default CodingProjectCard;
