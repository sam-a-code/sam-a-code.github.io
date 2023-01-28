import { useState } from 'react'
import Slider from "react-slick";

function ArtPortfolio() {

    const [seeMoreZinnia, setSeeMoreZinnia] = useState(false)
    function seeMoreZinniaFunction() {
        setSeeMoreZinnia(!seeMoreZinnia)
    }
    const [seeMoreCalathea, setSeeMoreCalathea] = useState(false)
    function seeMoreCalatheaFunction() {
        setSeeMoreCalathea(!seeMoreCalathea)
    }
    const [seeMoreSaguaro, setSeeMoreSaguaro] = useState(false)
    function seeMoreSaguaroFunction() {
        setSeeMoreSaguaro(!seeMoreSaguaro)
    }
    const [seeMoreRetusa, setSeeMoreRetusa] = useState(false)
    function seeMoreRetusaFunction() {
        setSeeMoreRetusa(!seeMoreRetusa)
    }
    const [seeMoreAzalea, setSeeMoreAzalea] = useState(false)
    function seeMoreAzaleaFunction() {
        setSeeMoreAzalea(!seeMoreAzalea)
    }
    const [seeMoreOrchid, setSeeMoreOrchid] = useState(false)
    function seeMoreOrchidFunction() {
        setSeeMoreOrchid(!seeMoreOrchid)
    }
    const [seeMoreHW, setSeeMoreHW] = useState(false)
    function seeMoreHWFunction() {
        setSeeMoreHW(!seeMoreHW)
    }
    const [seeMoreGG, setSeeMoreGG] = useState(false)
    function seeMoreGGFunction() {
        setSeeMoreGG(!seeMoreGG)
    }
    const [seeMoreSerprise, setSeeMoreSerprise] = useState(false)
    function seeMoreSerpriseFunction() {
        setSeeMoreSerprise(!seeMoreSerprise)
    }

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: true,
      };

    return (
        <>
           <Slider {...settings} className="art-slider">
                <div>
                    <img className='slider' src="https://i.imgur.com/gExd9Ur.jpg"/>
                    <h3 className='slider'>calathea</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/ANMqOzw.jpg"/>
                    <h3 className='slider'>etna tank</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/cX8H8rS.jpg"/>
                    <h3 className='slider'>retusa</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/PCf9UTG.jpg"/>
                    <h3 className='slider'>allium crop tank</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/sV9H0oP.jpg"/>
                    <h3 className='slider'>saguaro</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/kNYUk0Q.jpg"/>
                    <h3 className='slider'>calathea leggings</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3 className='slider'>zinnia</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/Qmsgs2i.jpg"/>
                    <h3 className='slider'>azalea</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/6Hj5gCr.jpg"/>
                    <h3 className='slider'>saguaro bodycon</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/0z7UnnE.png?1"/>
                    <h3 className='slider'>orchid</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/Gie3Lay.png"/>
                    <h3 className='slider'>hello, werld</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/WOGJMss.jpg"/>
                    <h3 className='slider'>dudleya swimsuit</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/KXhYLW1.png"/>
                    <h3 className='slider'>lil green guy</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/6KC7aJl.png"/>
                    <h3 className='slider'>accent peace</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HG9MASk.jpg"/>
                    <h3 className='slider'>daisy crop tee</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/MKagIry.png"/>
                    <h3 className='slider'>serprise</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/jn4YXdF.png"/>
                    <h3 className='slider'>lil jelly guy</h3>
                </div>
            </Slider>
            <div>
                <h1 className="section-header">Art + Designs</h1>
                <div className="art-parent">
                    <div className="art-child">
                        <img src="https://i.imgur.com/HyN6TW3.png"/>
                        <h3>Zinnia</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreZinnia ?
                            <button onClick={seeMoreZinniaFunction}>See more</button>
                            : <button onClick={seeMoreZinniaFunction}>See less</button>}
                        {seeMoreZinnia ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src="https://i.imgur.com/u4RriFn.png" /></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/XkJkVCF.png" /></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/RWsXZe2.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/Gie3Lay.png"/>
                        <h3>hello, werld</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreHW ?
                            <button onClick={seeMoreHWFunction}>See more</button>
                            : <button onClick={seeMoreHWFunction}>See less</button>}
                        {seeMoreHW ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/NHLMicF.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/IZs20jM.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/LqyovQz.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/KXhYLW1.png"/>
                        <h3>lil green guy</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreGG ?
                            <button onClick={seeMoreGGFunction}>See more</button>
                            : <button onClick={seeMoreGGFunction}>See less</button>}
                        {seeMoreGG ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/gcfmVoK.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/YdOgcAH.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/uzrfKfO.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/gExd9Ur.jpg"/>
                        <h3>Calathea</h3>
                        <h4>Marker + paper</h4>
                        {!seeMoreCalathea ?
                            <button onClick={seeMoreCalatheaFunction}>See more</button>
                            : <button onClick={seeMoreCalatheaFunction}>See less</button>}
                        {seeMoreCalathea ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src="https://i.imgur.com/uND1oCX.png" /></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/F1fPuOY.png" /></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/ZtL0zpa.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/0z7UnnE.png"/>
                        <h3>orchid</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreOrchid ?
                            <button onClick={seeMoreOrchidFunction}>See more</button>
                            : <button onClick={seeMoreOrchidFunction}>See less</button>}
                        {seeMoreOrchid ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/hrGRi7G.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/kOjkIg3.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/UW6bSBK.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/sV9H0oP.jpg"/>
                        <h3>Saguaro</h3>
                        <h4>Marker + paper</h4>
                        {!seeMoreSaguaro ?
                            <button onClick={seeMoreSaguaroFunction}>See more</button>
                            : <button onClick={seeMoreSaguaroFunction}>See less</button>}
                        {seeMoreSaguaro ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/eaPi7My.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/THYCkoh.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/HDxamlM.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/MKagIry.png"/>
                        <h3>serprise</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreSerprise ?
                            <button onClick={seeMoreSerpriseFunction}>See more</button>
                            : <button onClick={seeMoreSerpriseFunction}>See less</button>}
                        {seeMoreSerprise ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/vs6n9jH.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/5mUJcG2.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/RkicMyx.png" /></div>
                            </div>
                        : null}
                    </div>
                    <div className="art-child">
                        <img src="https://i.imgur.com/Qmsgs2i.jpg"/>
                        <h3>azalea</h3>
                        <h4>iPencil + Procreate</h4>
                        {!seeMoreAzalea ?
                            <button onClick={seeMoreAzaleaFunction}>See more</button>
                            : <button onClick={seeMoreAzaleaFunction}>See less</button>}
                        {seeMoreAzalea ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/VpLY4Cs.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/XrSZJwQ.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/Z3Z4Svr.png" /></div>
                            </div>
                        : null}
                    </div>
                        <div className="art-child">
                        <img src="https://i.imgur.com/cX8H8rS.jpg"/>
                        <h3>retusa</h3>
                        <h4>Marker + paper</h4>
                        {!seeMoreRetusa ?
                            <button onClick={seeMoreRetusaFunction}>See more</button>
                            : <button onClick={seeMoreRetusaFunction}>See less</button>}
                        {seeMoreRetusa ?
                            <div className='product-images'>
                                <div className='product-images-child'><img src= "https://i.imgur.com/v9uJ91B.png"/></div>
                                <div className='product-images-child'><img src= "https://i.imgur.com/oh0pFU7.png"/></div>
                                <div className='product-images-child'><img src="https://i.imgur.com/9bUYq3w.png" /></div>
                            </div>
                        : null}
                    </div>
                </div>
            </div>
        </>
    );
  }

  export default ArtPortfolio;
