
import React from "react";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"

const Caurosel =() =>{
    return(
        <div>
        <div className="container-fluid">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        { /*  Indicators */ }
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
      
         { /* Wrapper for slides */ }
          <div className="carousel-inner">
      
            <div className="item active">
              <img className="img-responsive" src ={img1} alt="teaching" style={{width: '100%' , height : "400px"}}/>
              
            </div>
      
            <div className="item">
              <img className="img-responsive" src ={img2} alt="aged" style={{width: '100%',height : "400px"}}/>
              
            </div>
          
            <div className="item">
              <img className="img-responsive" src ={img3} alt="smilies" style={{width: '100%',height : "400px"}} />
              
            </div>
        
          </div>
      
          { /* Left and right controls */ }
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
     
    </div>
        </div>
    )
}

export default Caurosel;