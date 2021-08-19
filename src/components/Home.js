import React, {useEffect, useState} from 'react';
import HeroCard from './HeroCard'

const Home = () =>{

const [render, setRender] = useState('')
//const [teamActualize, setteamActualize] = useState('')



    //Get from LS

    const data = localStorage.getItem('team');
    const arrTeam = JSON.parse(data);

    //Helper Function

    const onButtonClick = (obj) => {
        

        const newArray = arrTeam.filter((myHero)=>{
            return myHero.name !== obj.name;
        });
        
        let saveTeam = JSON.stringify(newArray);
        localStorage.setItem('team', saveTeam);
        
    }

    
    useEffect(()=>{

        //Render List

    const team = arrTeam.map((myHero,index)=>{
        return (
        <div key={index}>
            <HeroCard hero={myHero} />
            <button onClick={() =>{onButtonClick(myHero)}}>Remove</button>
        </div>
        )

    })

    setRender(team);

    },)


    return(
        <div>
            <h2>Esta es mi Home</h2>
            {render}
            
        </div>
    );
}

export default Home;