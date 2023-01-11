import { useState } from 'react'
import calathea from '../images/calathea/calathea.jpg'
import calatheaCrop from '../images/calathea/calathea-crop.png'
import calatheaHoodie from '../images/calathea/calathea-hoodie.png'
import calatheaLeggings from '../images/calathea/calathea-leggings.png'
import zinnia from '../images/zinnia/zinnia.png'
import zinniaTank from '../images/zinnia/zinnia-tank.png'
import zinniaHoodie from '../images/zinnia/zinnia-hoodie.png'
import zinniaTee from '../images/zinnia/zinnia-tee.png'
import saguaro from '../images/saguaro/saguaro.jpg'
import saguaroFannyPack from '../images/saguaro/saguaro-fannypack.png'
import saguaroLeggings from '../images/saguaro/saguaro-leggings.png'
import saguaroTank from '../images/saguaro/saguaro-tank.png'
import ImageGallery from 'react-image-gallery';



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

    const images = [
        {
          original: 'https://i.imgur.com/gExd9Ur.jpg',
        //   thumbnail: '../images/calathea/calathea.jpg',
        description: 'test',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
        //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];


    return (
        <>
        <ImageGallery items={images} />
        <div >
            <h1 className="section-header">Art + Designs</h1>
            <div className="art-parent">
                <div className="art-child">
                    <img src={zinnia}/>
                    <h3>Zinnia</h3>
                    <h4>Description: </h4>
                    {!seeMoreZinnia ?
                        <button onClick={seeMoreZinniaFunction}>See more</button>
                        : <button onClick={seeMoreZinniaFunction}>See less</button>}
                    {seeMoreZinnia ?
                        <div className='product-images'>
                            <div className='product-images-child'><img src={zinniaHoodie} /></div>
                            <div className='product-images-child'><img src={zinniaTank} /></div>
                            <div className='product-images-child'><img src={zinniaTee} /></div>
                        </div>
                    : null}
                </div>
                <div className="art-child">
                    <img src={calathea}/>
                    <h3>Calathea</h3>
                    <h4>Description: </h4>
                    {!seeMoreCalathea ?
                        <button onClick={seeMoreCalatheaFunction}>See more</button>
                        : <button onClick={seeMoreCalatheaFunction}>See less</button>}
                    {seeMoreCalathea ?
                        <div className='product-images'>
                            <div className='product-images-child'><img src={calatheaCrop}/></div>
                            <div className='product-images-child'><img src={calatheaHoodie}/></div>
                            <div className='product-images-child'><img src={calatheaLeggings}/></div>
                        </div>
                    : null}
                </div>
                <div className="art-child">
                    <img src={saguaro}/>
                    <h3>Saguaro</h3>
                    <h4>Description: </h4>
                    {!seeMoreSaguaro ?
                        <button onClick={seeMoreSaguaroFunction}>See more</button>
                        : <button onClick={seeMoreSaguaroFunction}>See less</button>}
                    {seeMoreSaguaro ?
                        <div className='product-images'>
                            <div className='product-images-child'><img src={saguaroFannyPack}/></div>
                            <div className='product-images-child'><img src={saguaroLeggings}/></div>
                            <div className='product-images-child'><img src={saguaroTank}/></div>
                        </div>
                    : null}
                </div>

            </div>
        </div>
        </>
    );
  }

  export default ArtPortfolio;
