import React from 'react';

const HeroCard = ({hero}) =>{


    return(
        <div>
           <div>
                <h1 >{hero? hero.name : ''}</h1>
                <img 
                    src={hero? hero.image.url: ''} 
                    alt={hero? "heroeImg" : ''}
                />
                
                
            </div>
        </div>
    );
}

export default HeroCard;