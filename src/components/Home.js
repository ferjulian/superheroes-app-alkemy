import React,{useState, useEffect} from 'react';
import HeroCard from './HeroCard';
import Powerstats from './Powerstats';
import './Home.css'




const Home = () =>{
    
const [updateHome, setUpdateHome] = useState(false);

const refresh = () =>{
setUpdateHome(!updateHome);
}
    
    return(
        <div className="home_container">
            <div className="container">

<div className="myborder">
    <h1>Your Team</h1>
</div>
<Powerstats />
<HeroCard updateHome={refresh} />


</div>
        </div>
        
    );
}

export default Home;