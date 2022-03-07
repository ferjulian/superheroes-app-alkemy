import React, { useState } from 'react';
import HeroCard from './HeroCard';
import Powerstats from './Powerstats';
import './Home.css'




const Home = () => {

    const [updateHome, setUpdateHome] = useState(false);

    const refresh = () => {
        setUpdateHome(!updateHome);
    }

    return (
        <div className="home_container min-vh-100  d-flex  flex-column align-items-center flex-wrap">
            <div className="container">
                <Powerstats />
                <HeroCard updateHome={refresh} />
            </div>
        </div>

    );
}

export default Home;