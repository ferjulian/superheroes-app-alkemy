import React from 'react';
import { useLocation } from 'react-router-dom';
import './DetailsInfo.css';



const DetailsInfo = (props) =>{

    const location = useLocation()
    

    return(
        <div className="containerr">
            <div className="wrapper">
            <div className="info-wrapper">
            <div className="inner">
            <h2>Hero details</h2>
            <h4><span>Name:</span> {location.state.hero.name}</h4>
            <h4><span>Alias:</span> {location.state.hero.biography.aliases[0]}</h4>
            <h4><span>Height:</span> {location.state.hero.appearance.height[1]}</h4>
            <h4><span>Weight:</span> {location.state.hero.appearance.weight[1]}</h4>
            <h4><span>Eye color:</span> {location.state.hero.appearance["eye-color"]}</h4>
            <h4><span>Hair color:</span> {location.state.hero.appearance["hair-color"]}</h4>
            <h4><span>Work base:</span> {location.state.hero.work.base}</h4>
            </div>
            </div>
            <div className="img-wrapper">
            <img className= "img-details" src={location.state.hero.image.url} alt="heroImg details"></img>
            </div>
            </div>   
        </div>
    );
}

export default DetailsInfo;