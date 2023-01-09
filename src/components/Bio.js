import headshot from '../images/headshot.jpg';

function Bio() {
    return (
        <>
            <h1 className="section-header">Bio</h1>
            <img src={headshot} className="bio-image"/>
            <div className="bio">
                <h4>Hi, I'm Sam! If you're looking at this website then you're probably looking at a job application I've sent in <br></br>(or you're one of my mom's friends to whom she sent this). Either way, hello + I'm thrilled you're here!</h4>

                <ul className="bio-list-header">I figure you're on this website to get to know me, so here are a few things about me outside of work:
                    <br></br>
                    <br></br>
                    <li className="bio-list">I love finding new restaurants to try AND I love spreadsheets. Every time I move to a new city one of the first things I do is create my restaurant spreadsheet. And yes, I always make sure you can filter by brunch availability. I'm the friend people text for restaurant recommendations when they're trying to impress someone.</li>
                    <br></br>
                    <li className="bio-list">Hardcore lover of plants. When I was living in LA I had a toooon of succulents – I loved propagating them and seeing how resilient they all are. Now that I'm in Chicago without a balcony, I've pivoted to houseplants and learning all about those. Did you know the calathea opens and closes with the sun each day? </li>
                    <br></br>
                    <li className="bio-list">In the same theme as the above, I love to visit botanical gardens and conservatories whenever I can. There are few better feelings than being in a room full of plants and greenery. The fern room at the Garfield Park Conservatory is particularly notable.</li>
                    <br></br>
                    <li className="bio-list">One of my favorite questions to ask people is what they've been reading lately. It's such a good way to learn more about a friend you've known forever or someone to just met. Plus, I always end up with great new recommendations.</li>
                    <br></br>
                    <li className="bio-list">I'm an artist – I design patterns and get them printed on clothing. I had an e-commerce clothing company where I sold apparel and accessories printed with my artwork. I shuttered the company because I wanted to pivot to more sustainable creation and distribution. My next art endeavor is learning how to screenprint, with the goal of putting my patterns on unique thrifted pieces.</li>
                    <br></br>
                    <li className="bio-list">I love a good farmers market (actually, I even love a bad one). That's actually how I found my current apartment – I plugged my favorite market into a map and only looked at buildings that were walking distance from it. Easily one of the best ideas I've ever had, if I do say so myself.</li>
                </ul>
                <br></br>

                <ul className="bio-list-header">And now the professional "get to know me" list:
                    <br></br>
                    <br></br>
                    <li className="bio-list">I love helping creatives pursue their dreams. YouTube Spaces were production facilities for the YouTube Creator community. Studio is a startup with the goal of making creative fulfillment attainable for everyone. The opportunity to work at organizations that help people create innovative projects, challenge themselves to grow, and connect with creative communities is something I feel very lucky to have experienced.</li>
                    <br></br>
                    <li className="bio-list">Much of my work has been tools-focused, which was a key reason that I decided to complete a coding bootcamp. Over the years, I'd gotten closer and closer to the technical side of projects and I wanted to be able to really understand what goes in to the engineering of programs and projects. In December 2022, I graduated from the Flatiron Software Engineering Full Stack Bootcamp.</li>
                    <br></br>
                    <li className="bio-list">One of the parts of being an engineer that I like the most is having an idea and being able to bring it to life (like this website that you're on right now!). It's empowering to tackle new projects, learn new skills, and to flex my design muslces.</li>
                    <br></br>
                    <li className="bio-list">I excel at building cross-functional relationships and communicating between different teams. I love the challenges of program management – balancing requests from multiple stakeholders, creating and improving processes, and ensuring all deliverables are fulfilled in a timely manner with a fantastic attitude.</li>
                </ul>

                <h4>I think it's our responsibility to make the world a better place together. I'd love to join a team where I can do that through my work, <br></br>whether that's through continuing to support creative communities, joining a company focused on social impact, <br></br>or being involved in a team's volunteer initiatives.</h4>
            </div>
        </>

    );
  }

  export default Bio;
