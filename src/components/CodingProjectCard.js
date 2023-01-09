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

console.log(demo)
    return (
        <div className="card-child">
            {/* <img src={image}/> */}
            <h3>{title}</h3>
            {title ? <h4>{oneLiner}</h4> : null}
            {demo ? <div><iframe src={demo} target="_blank" className="loom-demo">Watch the demo</iframe><br></br></div> : null}
            {url ? <><a href={url} target="_blank" className="card-child-link-text">See the deployed project here!</a><br></br> </> : null}
            {githubUrl ? <><a href={githubUrl} target="_blank" className="card-child-link-text">Github link</a><br></br></> : null}
            {githubUrl2 ? <><a href={githubUrl2} target="_blank" className="card-child-link-text">Backend Github link</a><br></br></> : null}
            {createdDate ? <h4>Created: {createdDate}</h4> : null}
            {description ? <p className="project-list">Description: {descriptionList}</p> : null}
            {commentary ? <p className="project-list">My commentary: {commentaryList}</p> : null}
            {skills ? <p className="project-list">Skills used for project: {skillsList}</p> : null}
        </div>
    );
  }


//   <div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/33c3cf49e8eb448da5f20883f8468d70" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

  export default CodingProjectCard;
