import React from "react";
import View from "./View";

function Home(){
    return(
        <>
        <div className="header">
            <div className="carousel-container">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="images/img3.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/img2.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="images/img1.webp" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
            </div>
            <h1 className="quote">Learn anything, teach anyone.</h1>
            </div>
            <View />
            
      </>
    )
}

export default Home;