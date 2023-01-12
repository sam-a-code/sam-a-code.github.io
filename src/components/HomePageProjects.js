import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,

      };

    return (
        <div >
            <h1 className="section-header">Highlights</h1>
            <Slider {...settings} className="slider-parent">
                <div>
                    <img className='slider-home' src="https://i.imgur.com/hAJVs9N.png"/>
                    <h3 className='slider-home'>WeAte.</h3>
                    <h5>A dinner party planning app.</h5>
                </div>
                <div>
                    <img className='slider-home' src="https://i.imgur.com/aVyRJoK.png"/>
                    <h3 className='slider-home'>Groovehound</h3>
                    <h5>A concert tracking app.</h5>
                </div>
                <div>
                    <img className='slider-home' src="https://i.imgur.com/ERQenE8.png"/>
                    <h3 className='slider-home'>Tutoring Scheduler</h3>
                    <h5>A tutor appointment scheduling app.</h5>
                </div>
                <div>
                    <img className='slider-home' src="https://i.imgur.com/4xDejlO.png"/>
                    <h3 className='slider-home'>Book Desert Resources</h3>
                    <h5>An app to spread awareness about book deserts.</h5>
                </div>
                <div>
                    <img className='slider-home' src="https://i.imgur.com/dtYFFGo.png"/>
                    <h3 className='slider-home'>Farmers Market Recipe Finder</h3>
                    <h5>A recipe-finder app, inspired by seasonal produce.</h5>
                </div>
            </Slider>
            <button onClick={goToProjects} className="see-more-button">See all technical projects</button>
        </div>
    );
  }

  export default HomePageProjects;
