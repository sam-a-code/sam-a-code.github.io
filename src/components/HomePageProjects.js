import bookDesserts from '../images/book-desserts.png'
import farmersMarket from '../images/farmers-market.png'
import groovehound from '../images/groovehound.png'
import tutorAppointments from '../images/tutor-appointments.png'
import weAte from '../images/weate.png'


function HomePageProjects() {

    function goToProjects() {
        window.location.href = '/coding-portfolio'
    }

    return (
        <div>
            <h1 className="section-header">Highlighted Projects</h1>
            <div className="highlights-parent">
                <div className="highlights-child">
                    <img src={weAte} />
                    <h3>WeAte.</h3>
                    <h5>A dinner party planning app.</h5>
                    <p>WeAte is definitely my favorite project I've ever created. One of my all time favorite activities is hosting people. Whether it's a full dinner party or a quiet night with wine and cheese, making people feel comfortable, taken care of, and (of course), fed, brings me so much joy. The memories made when we spend time together, just enjoying each other's company, are always some of my favorites.
                        <br></br>
                        <br></br>
                    Hosting a dinner party can be intimidating, so I created WeAte in part to help people make sure they have everything they need to host a successful night. For those who already are comfortable with hosting, WeAte allows them to keep track of the dates, times, and locations of their events, as well as storing recipes for future reference.
                    </p>
                    <button type='button' onClick={goToProjects}>Read more about this project</button>
                </div>
                <div className="highlights-child">
                    <img src={groovehound} />
                </div>
                <div className="highlights-child">
                    <img src={tutorAppointments} />
                </div>
                <div className="highlights-child">
                    <img src={bookDesserts} />
                </div>
                <div className="highlights-child">
                    <img src={farmersMarket} />
                </div>
            </div>
        </div>
    );
  }

  export default HomePageProjects;
