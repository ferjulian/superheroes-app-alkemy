import React, {useState} from 'react';
import './styles.css';

const SearchCard = ({heroObj}) =>{

    const [error, setError] = useState('');

    const onButtonClick = () => {
       
        const getHeroes = localStorage.getItem('team');
      
        if (getHeroes){
            
            let team = JSON.parse(getHeroes);
            let numHeroes = team.length;
            
            if(numHeroes < 6){
                storeInLS(team,heroObj)
            }else{
                
                setError('The team is full!');
                setTimeout(()=>{setError('')},3500)
            }
            
        }else{
            let team = [];
            storeInLS(team,heroObj)
        
        }

    
    function storeInLS (team,heroObj) {
            team.push(heroObj);
            let saveTeam = JSON.stringify(team);
            localStorage.setItem('team', saveTeam);
        }
    }

    return(
        <div>
           <div>
                <h1 >{heroObj.name}</h1>
                <img 
                    src={heroObj.image.url} 
                    alt="heroeImg"
                />
                <button onClick={()=> onButtonClick()}>Add</button>
                <div className='errorMsg'>{error}</div>
            </div>
        </div>
    );
}

export default SearchCard;