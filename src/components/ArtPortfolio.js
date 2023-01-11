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

    // const images = [
    //     {
    //       original: 'https://i.imgur.com/gExd9Ur.jpg',
    //     //   thumbnail: '../images/calathea/calathea.jpg',
    //     description: 'test',
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1015/1000/600/',
    //     //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1019/1000/600/',
    //     //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    //   ];

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
      };

    return (
        <>
           <Slider {...settings}>
                <div>
                    <img className='slider' src="https://i.imgur.com/gExd9Ur.jpg"/>
                    <h3 className='slider'>Calathea</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/sV9H0oP.jpg"/>
                    <h3 className='slider'>Saguaro</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3 className='slider'>Zinnia</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3 className='slider'>Zinnia</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3 className='slider'>Zinnia</h3>
                </div>
                <div>
                    <img className='slider' src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3 className='slider'>Zinnia</h3>
                </div>
            </Slider>
        {/* <ImageGallery items={images} /> */}
        <div >
            <h1 className="section-header">Art + Designs</h1>
            <div className="art-parent">
                <div className="art-child">
                    <img src="https://i.imgur.com/HyN6TW3.png"/>
                    <h3>Zinnia</h3>
                    <h4>Description: </h4>
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
                    <img src="https://i.imgur.com/gExd9Ur.jpg"/>
                    <h3>Calathea</h3>
                    <h4>Description: </h4>
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
                    <img src="https://i.imgur.com/sV9H0oP.jpg"/>
                    <h3>Saguaro</h3>
                    <h4>Description: </h4>
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

            </div>
        </div>
        </>
    );
  }

  export default ArtPortfolio;
