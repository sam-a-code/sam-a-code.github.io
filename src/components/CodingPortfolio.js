// import CodingProjectContainer from "./CodingProjectContainer";

function CodingPortfolio() {
    return (
        <>
            <div className="coding-project-section">
            <h1 className="section-header">Coding Projects</h1>
            <div className="card-parent">
                <div className="card-child">
                    <img src="https://i.imgur.com/hAJVs9N.png"/>
                    <h3>WeAte.</h3>
                    <h4>A dinner party planner built with React + styled with CSS</h4>
                    <div><iframe src="https://www.loom.com/embed/33c3cf49e8eb448da5f20883f8468d70" target="_blank" className="loom-demo">Watch the demo</iframe><br></br></div>
                    <br></br>
                    <a href="https://we-ate.onrender.com/" target="_blank" className="card-child-link-text">See the deployed project here!</a>
                    <br></br>
                    <a href="https://github.com/sam-a-code/dinner-party-planner-final" target="_blank" className="card-child-link-text">Github link</a>
                    <ul className="project-list">
                        <li>Implemented authentication and authorization to allow users to create individual accounts and access information.</li>
                        <li>Wrote API functionality with Ruby on Rails, built the database schema, and used ActiveRecord + SQLite for DB logic.</li>
                        <li>Incorporated Email.js to allow users to send themselves guest and ingredient lists for party planning.</li>
                    </ul>
                    <p className="project-list">Combine event background, Proud of styling, Lessons learned:</p>
                    <p className="project-list">Skills used for project: Ruby on Rails, React, CSS, Email.js, Authentication, Authorization, API, SQLite, ActiveRecord, Google Fonts</p>
                    <h4>Created: December 2022</h4>
                </div>
                <div className="card-child">
                    <img src="https://i.imgur.com/aVyRJoK.png"/>
                    <h3>Groovehound</h3>
                    <h4>An app to track previous concert attendance and find upcoming concerts</h4>
                    <div><iframe src="https://www.loom.com/embed/b3036ee331a343f086f02f50b42d3347" target="_blank" className="loom-demo">Watch the demo</iframe><br></br></div>
                    <a href="https://github.com/sam-a-code/concert-tracker" target="_blank" className="card-child-link-text">Github link</a>
                    <ul className="project-list">
                        <li>Implemented backend API with Ruby on Rails, using ActiveRecord and MVC framework to set up relationships.</li>
                        <li>Created login functionality with authentication and authorization.</li>
                        <li>Used a combination of Mantine framework and CSS for UI, creating an eye-catching profile page and band cards.</li>
                    </ul>
                    <p className="project-list">Concert tracking, First time using auth and auth, Lessons learned:</p>
                    <p className="project-list">Skills used for project: Ruby on Rails, React, CSS, Authentication, Authorization, API, MVC framework, ActiveRecord, Mantine framework, Google Fonts</p>
                    <h4>Created: November 2022</h4>
                </div>
                <div className="card-child">
                    <img src="https://i.imgur.com/ERQenE8.png"/>
                    <h3>Tutoring Scheduler</h3>
                    <h4>Created an app for students to schedule time with tutors using React and Ruby.</h4>
                    <div><iframe src="https://www.loom.com/embed/6355b4193828459caa35f03535096ef4" target="_blank" className="loom-demo">Watch the demo</iframe><br></br></div>
                    <a href="https://github.com/sam-a-code/phase-3-tutor-appointments-frontend" target="_blank" className="card-child-link-text">Frontend Github link</a>
                    <br></br>
                    <a href="https://github.com/sam-a-code/phase-3-tutor-appointments-backend" target="_blank" className="card-child-link-text">Backend Github link</a>
                    <ul className="project-list">
                        <li>Implemented CRUD functionality on appointment scheduling and creation.</li>
                        <li>Added styling to support a strong visual identity – used CSS and an imported font to make app look like a handwritten notebook page.</li>
                        <li>Mapped through backend seed data, generating cards for every instance of appointments, students, and instructors.</li>
                    </ul>
                    <p className="project-list">Thoughtful tool for users, Help people education, Lessons learned:</p>
                    <p className="project-list">Skills used for project: Ruby, React, CSS, API, ActiveRecord, Google Fonts</p>
                    <h4>Created: November 2022</h4>
                </div>
                <div className="card-child">
                    <img src="https://i.imgur.com/4xDejlO.png"/>
                    <h3>Book Deserts</h3>
                    <h4>A resource for sharing information about book deserts and organizations that are working to change them.</h4>
                    <a href="https://github.com/sam-a-code/book-desert-project-II" target="_blank" className="card-child-link-text">Github link</a>
                    <ul className="project-list">
                        <li>Used React, CSS for styling, and implemented NavLink, ensuring site was compelling and easy to navigate.</li>
                        <li>Created a RESTful API for the backend, organizing book and resource information so it was easily accessible.</li>
                    </ul>
                    <p className="project-list">Passion project, Use coding to share resources and ideas, Lessons learned:</p>
                    <p className="project-list">Skills used for project: Ruby, React, CSS, API, ActiveRecord, Google Fonts</p>
                    <h4>Created: October 2022</h4>
                </div>
                <div className="card-child">
                    <img src="https://i.imgur.com/dtYFFGo.png"/>
                    <h3>Farmers Market Recipe Finder</h3>
                    <h4>A resource for finding recipes inspired by seasonal items from the farmers market.</h4>
                    <a href="https://github.com/sam-a-code/farmers-market-recipe-finder" target="_blank" className="card-child-link-text">Github link</a>
                    <ul className="project-list">
                        <li>Used onClick</li>
                        <li>CSS for styling</li>
                    </ul>
                    <p className="project-list">I love farmers markets and cooking, Eager to upgrade with better seasonal logic, Lessons learned:</p>
                    <p className="project-list">Skills used for project: HTML, CSS, JavaScript</p>
                    <h4>Created: October 2022</h4>
                </div>
                <div className="card-child">
                    <img src="https://i.imgur.com/UwdiDUn.png"/>
                    <h3>Portfolio Website (what you're looking at right now!)</h3>
                    <h4>My professional website – containing my work history, coding portfolio, and art portfolio.</h4>
                    <a href="https://github.com/sam-a-code/sam-a-code.github.io" target="_blank" className="card-child-link-text">Github link</a>
                    <ul className="project-list">
                        <li>Used React.js to build site</li>
                        <li>Used CSS, imported Google Fonts, and curated images to ensure my unique personality came through on site</li>
                    </ul>
                    <p className="project-list">ADD, Lessons learned:</p>
                    <p className="project-list">Skills used for project: React.js, CSS, JavaScript, AWS Amplify</p>
                    <h4>Created: January 2023</h4>
                </div>
            </div>
        </div>
        </>
    );
  }

  export default CodingPortfolio;
