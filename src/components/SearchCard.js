import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import './styles.css';

const SearchCard = ({heroObj}) =>{

    const [error, setError] = useState('');

    const onButtonClick = () => {
       
        const getHeroes = localStorage.getItem('team');
      
        if (getHeroes){
            
            let team = JSON.parse(getHeroes);
            let numHeroes = team.length;
            let goodAlignment = 0;
            let badAlignment = 0;
            let heroExist = false;
           
            //Alignment Validation

            team.forEach( hero =>{
                if (hero.biography.alignment === 'good'){
                    goodAlignment++
                }else{
                    badAlignment++
                  }
                
                if (heroObj.name === hero.name){
                    heroExist = true;
                } 

                });
            
           console.log(goodAlignment);

            if(numHeroes < 6){

                if(goodAlignment < 3 && badAlignment < 3){

                    if( !heroExist ){
                        storeInLS(team,heroObj);
                    }else{
                        setError('Este heroe ya fue ingresado');
                        setTimeout(()=>{setError('')},3500)
                    }
                    
                }else{
                    setError('You can only enter 3 heroes with good alignment and 3 with bad alignment');
                    setTimeout(()=>{setError('')},3500)
                }
                
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