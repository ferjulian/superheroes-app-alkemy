import React from 'react';

const HeroCard = ({hero}) =>{

    
   /* const onButtonClick = () => {

        
        
        const data = localStorage.getItem('team');
        const myTeam = JSON.parse(data);

        const newArray = myTeam.filter((myHero)=>{
            return myHero.name !== hero.name;
        });
        
        
        let saveTeam = JSON.stringify(newArray);
        localStorage.setItem('team', saveTeam);
        

    }*/

    return(
        <div>
           <div>
                <h1 >{hero.name}</h1>
                <img 
                    src={hero.image.url} 
                    alt="heroeImg"
                />
                
                
            </div>
        </div>
    );
}

export default HeroCard;