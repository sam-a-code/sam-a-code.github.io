
function Bio() {
    return (
        <div className="bio">
            <h1 className="section-header">Bio</h1>
            <div className='bio-parent'>
                <div className='bio-child'>
                    <h2>Who I am</h2>
                    <p>I'm Sam – lover of farmers markets, creative pursuits, bad puns, and the em dash. I believe it's important to leave our campsites cleaner than we found them (despite not being very outdoorsy, I do love this sentiment). The most popular spreadsheet I've ever created is one for restaurants – new ones I want to try, ones I recommend for out of town guests, dishes you simply MUST order, etc. You can filter by brunch and patio availability, obviously.</p>
                    <p>Throughout my journey I've collected a pretty wide array of experiences. From program managing a social impact business conference, to wearing a ton of hats at a startup focused on creative fulfillment, to graduating from a software engineering bootcamp and building this website (the one you're on right now!), my experience has always been focused on learning, creativity, and social impact. </p>
                    <p>I'm inspired by businesses who are focused on making the world a better place and I'm driven by work that helps people accomplish their creative goals. I also draw a lot – check out some of my designs on the art tab.</p>
                    {/* <p>I'm passionate about learning and creativity, and programs that help people do both. I love the farmers market, houseplants, and trying new recipes. I draw a lot, usually pretty abstract designs that I print on apparel – there are few better feelings than wearing something you created.</p> */}
                    {/* <p>I believe it's important to leave our campsites cleaner than we found them (I could not be less outdoorsy, but I do love the sentiment). I love being the person that my friends text for restuarant recommendations, and my restaurant spreadsheet is always updated.</p> */}
                    {/* <p>The projects on which I've worked have almost all been dedicated to creating, empowering, and promoting creative communities. As I've progressed in my career, I've taken on more ownership of managing programs. After a few years getting closer to the technical side of program management, I decided to take the leap in to Software Engineering.</p> */}
                </div>
                <img src='https://i.imgur.com/aVT48B4.jpg' className='bio-child'/>
            </div>
            <div className='bio-parent'>
                <img src='https://i.imgur.com/KXhYLW1.png' className='bio-child'/>
                <div className='bio-child'>
                    <h2>What I do</h2>
                    <p>Currently, what I'm doing is looking for a job! The roles in which I'm most interested are: Program Manager, Product Manager, or Software Developer.</p>
                    <p>I started out working in events at a production facility, hosting music nights, film premieres, workshops, album launches, and more. After a few years, I was promoted to the Operations team, supporting the global network of production sites. After about five years at that company, I decided it was time for a change. I quit my job (leaving a team I loved dearly), put almost all of my possessions in storage, and drove across the country.</p>
                    <p>I joined a startup that offered e-learning experiences for creatives. While there, I realized that I could be significantly more self-sufficient if I improved my technical skills. I learned how to update our codebase with new class launch content – even implementing some bug fixes! It was empowering to be able to make changes myself, and that gave me the push I needed to sign up for a coding bootcamp.</p>
                    <p>The bootcamp was one of the most challenging things I've undertaken in a long time, but I'm so glad I did it. It felt good to challenge myself and to bet on myself – that this leap of faith would pay off. We learned React.js (my favorite), Ruby on Rails, CSS, JavaScript, SQL, and more. Click over to my coding portfolio to see some of the projects I've created!</p>
                </div>
            </div>
            <div className='bio-parent'>
                <div className='bio-child'>
                    <h2>Why I do it</h2>
                    {/* <p>Right before I made the leap to the coding bootcamp, I realized I had cultivated a pretty unique array of skills. Between my program management, my relationship building, my ability to translate content between audiences (i.e. technical concepts to a non-technical team), and my strength in writing thorough documentation, I knew that if I took on more technical learning, I could provide even more value to the next team I joined.</p> */}
                    <p>I think the world is so much more vibrant with art and creativity and connection – and I can't wait to see how I can incorporate those into my next role.</p>
                    <p>I excel at building cross-functional relationships and communicating between different teams. I love the challenges of program management – balancing requests from multiple stakeholders, creating and improving processes, and ensuring all deliverables are fulfilled on time and with a fantastic attitude. I love learning the ins and outs of new tools and I find satisfaction in making processes more efficient.</p>
                    <p>I'm eager to implement my new software engineering skills wherever I can. The ability to build new features, improve user journeys from a process and UX perspective, and to continue improving my technical expertise makes me really excited for whatever comes next.</p>

                    </div>
                    <img src='https://i.imgur.com/hAJVs9N.png' className='bio-child'/>
            </div>
        </div>

    );
  }

  export default Bio;
