import React, {useState} from 'react';
import HeroCard from './HeroCard'
import Powerstats from './Powerstats'

const Home = () =>{
    
    const [update, setUpdate] = useState(true);
    
     //Get from LS

     const data = localStorage.getItem('team');
     const arrTeam = JSON.parse(data);

    

     //Render List
     
     const team = arrTeam.map((myHero,index)=>{
        return (
        <div key={index}>
            <HeroCard hero={myHero} />
            {myHero.name? <button onClick={() =>{onButtonClick(myHero)}}>Remove</button>: ''}
        </div>
        )
   
    })
 
     //Helper Function - Remove Hero
 
     const onButtonClick = (obj) => {
     

         const newArray = arrTeam.filter((myHero)=>{
             return myHero.name !== obj.name;
         });
         
         let saveTeam = JSON.stringify(newArray);
         localStorage.setItem('team', saveTeam);
 
         setUpdate(!update);
         
     }

     
    
    return(
        <div>
            <Powerstats team={arrTeam}/>
            <h2>Esta es mi Home</h2>
            {team}  
        </div>
    );
}

export default Home;