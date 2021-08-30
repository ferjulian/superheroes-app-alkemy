import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './HeroCard.css';


const HeroCard = (props) =>{

    const[toDetails, setToDetails] = useState('');
    
     //Get from LS

     const data = localStorage.getItem('team');
     const arrTeam = JSON.parse(data);

    

     //Render Heroes
     
     const team = arrTeam.map((myHero,index)=>{
        return (

            <div key={index} className="card">
<img src={myHero.image.url} alt="heroImg"></img>
<div className="info_wrapper">
    <h5>{myHero.name}</h5>
    {myHero.name? <button className="card-link" onClick={() =>{onDetailsClick(myHero)}}>Details</button>: ''} 
    {myHero.name? <button className="card-link" onClick={() =>{onButtonClick(myHero)}}>Remove</button>: ''} 
    
</div>
<table>
  <tr>
    <th>{myHero.powerstats.power}</th>
    <th>{myHero.powerstats.strength}</th>
    <th>{myHero.powerstats.speed}</th>
  </tr>
  <tr>
    <td>Power</td>
    <td>Strengh</td>
    <td>Speed</td>
  </tr>
  <tr>
    <th>{myHero.powerstats.durability}</th>
    <th>{myHero.powerstats.intelligence}</th>
    <th>{myHero.powerstats.combat}</th>
  </tr>
  <tr>
    <td>Durab.</td>
    <td>Intel.</td>
    <td>Combat</td>
  </tr>
</table>

    </div>

        )
   
    });


 
     //Helper Function - Remove Hero
 
     const onButtonClick = (obj) => {
     

         const newArray = arrTeam.filter((myHero)=>{
             return myHero.name !== obj.name;
         });
         
         let saveTeam = JSON.stringify(newArray);
         localStorage.setItem('team', saveTeam);
 
         
         props.updateHome()
         
     }

     //Helper Function - Details

     const onDetailsClick = (obj) =>{
         
         setToDetails(obj);

     }

    

    return(
        <div className="row d-flex justify-content-center">
            {team}
            {toDetails? <Redirect to={{
                pathname: '/Details', 
                state: {hero: toDetails}
            }}/> : ''}
        </div>
    )
}

export default HeroCard;