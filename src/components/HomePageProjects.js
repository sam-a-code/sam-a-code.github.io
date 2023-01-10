import bookDeserts from '../images/book-deserts.png'
import farmersMarket from '../images/farmers-market.png'
import groovehound from '../images/groovehound.png'
import tutorAppointments from '../images/tutor-appointments.png'
import weAte from '../images/weate.png'
import React, { useState } from 'react'
import Slider from "react-slick";


function HomePageProjects() {

    function goToProjects() {
        window.location.href = '/coding-portfolio'
    }

    const [seeMore1, setSeeMore1] = useState(false)
    function seeMoreFunction1() {
        setSeeMore1(!seeMore1)
    }
    const [seeMore2, setSeeMore2] = useState(false)
    function seeMoreFunction2() {
        setSeeMore2(!seeMore2)
    }
    const [seeMore3, setSeeMore3] = useState(false)
    function seeMoreFunction3() {
        setSeeMore3(!seeMore3)
    }
    const [seeMore4, setSeeMore4] = useState(false)
    function seeMoreFunction4() {
        setSeeMore4(!seeMore4)
    }
    const [seeMore5, setSeeMore5] = useState(false)
    function seeMoreFunction5() {
        setSeeMore5(!seeMore5)
    }

    var settings = {
        dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        slidesToScroll: 5,
        arrows: true,
      };

    return (
        <div>
            <h1 className="section-header">Highlighted Projects</h1>
            <Slider {...settings}>
                <div className="highlights-child">
                    <img src={weAte} />
                    <h3>WeAte.</h3>
                    <h5>A dinner party planning app.</h5>
                    { !seeMore1 ? <button onClick={seeMoreFunction1}>Read more about this project</button> : <button onClick={seeMoreFunction1}>Close</button>}

                    <br></br>
                    {seeMore1 ?
                        <div>
                        <p>WeAte is definitely my favorite project I've ever created. One of my all time favorite activities is hosting people. Whether it's a full dinner party or a quiet night with wine and cheese, making people feel comfortable, taken care of, and (of course), fed, brings me so much joy. The memories made when we spend time together, just enjoying each other's company, are always some of my favorites.
                            <br></br>
                            <br></br>
                        Hosting a dinner party can be intimidating, so I created WeAte in part to help people make sure they have everything they need to host a successful night. For those who already are comfortable with hosting, WeAte allows them to keep track of the dates, times, and locations of their events, as well as storing recipes for future reference.
                        </p>
                        </div>
                    : null }
                </div>
                <div className="highlights-child">
                    <img src={groovehound} />
                    <h3>Groovehound</h3>
                    <h5>A concert tracking app.</h5>
                    { !seeMore2 ? <button onClick={seeMoreFunction2}>Read more about this project</button> : <button onClick={seeMoreFunction2}>Close</button>}
                    <br></br>
                    {seeMore2 ?
                        <div>
                        <p>Groovehound was a fun adventure into trying authorization and authentication for the first time. It was our last group project in the Flatiron bootcamp, and it was really nice to get to work with a team while implementing both concepts for the first time. It was also helpful to create something fun – getting to find new bands and check out venues I might want to experience in the future was a great exercise.
                            <br></br>
                            <br></br>
                        This project was where I got to spend some extra time on CSS. CSS and design have been unexpectedly been my favorite parts of building projects, and I'm most proud of the stub CSS styling I did in this project. I did get the CSS basics from CodePen, but I had to change quite a few of the attributes to make sure they rendered as we intended.
                        </p>
                        </div>
                    : null }
                </div>
                <div className="highlights-child">
                    <img src={tutorAppointments} />
                    <h3>Tutoring Scheduler</h3>
                    <h5>A tutor appointment scheduling app.</h5>
                    { !seeMore3 ? <button onClick={seeMoreFunction3}>Read more about this project</button> : <button onClick={seeMoreFunction3}>Close</button>}
                    <br></br>
                    {seeMore3 ?
                        <div>
                        <p>This app was created with the goal of helping students create, update, and cancel appointment sessions with tutors.
                            <br></br>
                            <br></br>
                        I'm most proud of the CSS on this page – I imported a Google Font to make each page look hand-written, as well as using CSS to set each page's background to look like a notebook page.
                        </p>
                        </div>
                    : null }
                </div>
                <div className="highlights-child">
                    <img src={bookDeserts} />
                    <h3>Book Desert Resources</h3>
                    <h5>An app to spread awareness about book deserts.</h5>
                    { !seeMore4 ? <button onClick={seeMoreFunction4}>Read more about this project</button> : <button onClick={seeMoreFunction4}>Close</button>}
                    <br></br>
                    {seeMore4 ?
                        <div>
                        <p>Book deserts are similar to food deserts – areas that are lacking in books and library resources for the community. While there are serious impacts, especially on children, from living in book deserts, there are some really fantastic organizations doing impactful work in this space. This app seeks to highlight those organizations and share resources about iniatives related to ending book deserts.
                            <br></br>
                            <br></br>
                        Making this project made me realize how much impact I could have with coding. The ability to create and distribute resources is really exciting – especially when I can focus on causes about which I'm passionate.
                        </p>
                        </div>
                    : null }
                </div>
                <div className="highlights-child">
                    <img src={farmersMarket} />
                    <h3>Farmers Market Recipe Finder</h3>
                    <h5>A recipe-finder app, inspired by seasonal produce.</h5>
                    { !seeMore5 ? <button onClick={seeMoreFunction5}>Read more about this project</button> : <button onClick={seeMoreFunction5}>Close</button>}
                    <br></br>
                    {seeMore5 ?
                        <div>
                        <p>Farmers markets are EASILY one of my favorite places. Getting to go to the farmers market is always the highlight of my week. This app came about because I thought it would be helpful to have a way to track seasonal produce, which would help with recipe inspiration as I walked through the market.
                            <br></br>
                            <br></br>
                        We used a recipe API to create this app – using our search bar as the integration with the app. It's helpful to be able to see a handful of recipes with just a click of a button.
                        </p>
                        </div>
                    : null }
                </div>
                </Slider>
            <div className="highlights-parent">



            </div>
            <button onClick={goToProjects}>See all technical projects</button>
        </div>
    );
  }

  export default HomePageProjects;
