import React from 'react';
import HeroCard from './HeroCard';
import BarChart from './BarChart';
import Powerstats from './Powerstats';
import './Home.css'




const Home = () =>{
    
     
    
    return(
        <div className="container-fluid myborder">
            <div className="row myborder">
                <h1>Mejorstat</h1>
            </div>
            <div className="row myborder">
            <div className="col-7 myborder">
            <HeroCard />
            </div>
            <div className="col-5 myborder">
            <BarChart />
            </div>
            </div>
            
        
        </div>
    );
}

export default Home;