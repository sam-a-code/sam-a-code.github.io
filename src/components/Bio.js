import headshot from '../images/headshot.jpg';

function Bio() {
    return (
        <div className="bio">
            <h1 className="section-header">Bio</h1>
            <div className='bio-parent'>
                <div className='bio-child'>
                    <h1>Who I am</h1>
                    <p>I'm passionate about learning and creativity, and programs that help people do both. I love the farmers market, houseplants, and trying new recipes. I draw a lot, usually pretty abstract designs that I then print on apparel – there are few better feelings than wearing something you created.</p>
                    <p>I believe it's important to leave our campsites cleaner than we found them (I could not be less outdoorsy, but I do love the sentiment). I love being the person that my friends text for restuarant recommendations, and I make sure to keep my restaurant spreadsheet updated.</p>
                    <p>The teams on which I've worked have been dedicated to creating, distributing, and promoting creative communities. As I've progressed in my career, I've taken on more and more ownership of managing programs. After a few years getting closer to the technical side of program management, I decided to take the leap in to Software Engineering.</p>
                </div>
                <img src='https://i.imgur.com/aVT48B4.jpg' className='bio-child'/>
            </div>
            <div className='bio-parent'>
                <img src='https://i.imgur.com/hAJVs9N.png' className='bio-child'/>
                <div className='bio-child'>
                    <h1>What I do</h1>
                    <p>I started out working in events at a production facility, and eventually transitioned to working on the Operations team for our global facility network. Much of my work focused on tools and process – and making sure the work I did could apply to teams and users at all of our global locations. After about five years at that job, I decided it was time for a change. I quit my job (leaving a team I loved dearly), put almost all of my possessions in storage, and drove across the country.</p>
                    <p>I started working at a startup that focused on making creative fulfillment attainable for everyone. While there, more and more of my work involved me increasing my technical skills. I even started using VS Code to update our codebase with new class launches and bug fixes. It was empowering to be able to make changes myself, and that made me realize that I wanted to sign up for a software bootcamp.</p>
                    <p>The bootcamp was one of the most challenging things I've undertaken in a long time – but I'm so glad I did it. It felt good to challenge myself, to learn about a whole new world, and to bet on myself – that this program would pay off in my career. We learned React.js (my favorite), Ruby on Rails, CSS, JavaScript, SQL, and more. I supplemented my learning with CodeCademy modules, wanting to learn the information from several differnt sources. I built the website you're on now – and that feels great. Click over to my coding portfolio to see some of the other projects I've created!</p>
                </div>
            </div>
            <div className='bio-parent'>
                <div className='bio-child'>
                    <h1>Why I do it</h1>
                    <p>Right before I made the leap to the coding bootcamp, I realized I had cultivated a pretty unique array of skills. Between my program management, my relationship building, my ability to translate content between audiences (i.e. technical concepts to a non-technical audience), my strenghth in writing thorough documentation, I knew that if I took on more technical learning, I could provide even more value to the next team I joined.</p>
                    <p>I excel at building cross-functional relationships and communicating between different teams. I love the challenges of program management – balancing requests from multiple stakeholders, creating and improving processes, and ensuring all deliverables are fulfilled in a timely manner with a fantastic attitude.</p>
                    <p>I genuinely enjoy improving user experiences (whether for internal or external users), I love learning the ins and outs of new tools, and I find satisfaction in making processes more efficient. Also, I think the world is so much more vibrant with art and creativity and connection – I'd love to help contribute to that in any number of ways.
                    </p>
                    </div>
                    <img src='https://i.imgur.com/aVT48B4.jpg' className='bio-child'/>
            </div>
        </div>

    );
  }

  export default Bio;
