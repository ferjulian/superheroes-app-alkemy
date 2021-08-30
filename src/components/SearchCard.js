import React, {useState} from 'react';
import './styles.css';
import './SearchCard.css';

const SearchCard = ({heroObj}) =>{

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [hover, setHover] = useState('');

    const onButtonClick = () => {
       
        const getHeroes = localStorage.getItem('team');
      
        if (getHeroes){
            
            let team = JSON.parse(getHeroes);
            let numHeroes = team.length;
            let goodAlignment = 0;
            let badAlignment = 0;
            let heroExist = false;
           
            //Validations

            team.forEach( hero =>{
                
                if (hero.biography.alignment === 'good'){
                    goodAlignment++
                }else{
                    badAlignment++
                  }
                
                if (heroObj.id === hero.id){
                    heroExist = true;
                } 

                });
            

            if(numHeroes < 6){

                //Repeated hero

                if( !heroExist ){

                // Bad/Good Alignment validation

                if(heroObj.biography.alignment === 'bad'){

                    if(badAlignment < 3){

                        storeInLS(team,heroObj);
                        setSuccess('Success!');
                        setTimeout(()=>{setSuccess('')},3500)
    
                }else{
                    setError('You can only enter 3 heroes with bad alignment.');
                    setTimeout(()=>{setError('')},3500)
                }                    

                }else{

                    if(goodAlignment < 3){

                        storeInLS(team,heroObj);
                        setSuccess('Success!');
                        setTimeout(()=>{setSuccess('')},3500)

                }else{
                    setError('You can only enter 3 heroes with good alignment.');
                    setTimeout(()=>{setError('')},3500)
                }


                }


                    }else{
                        setError('Este heroe ya fue ingresado.');
                        setTimeout(()=>{setError('')},3500)
                    }
                    
                
                
            }else{
                
                setError('The team is full.');
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


<div 
    className="card" 
    onMouseOver={() => setHover('hover')}
    onMouseLeave={() => setHover('')}
>
  <img className="SearchCard_image" src={heroObj.image.url} alt="hero"/>
  <div className={`card-body ${hover}`}>
      <span>
      <h5 className="text">{heroObj.name}</h5>
    <button className="SearchCard_button" onClick={()=> onButtonClick()}>Add</button>
      </span>
    
                <div className='errorMsg'>{error}</div>
                <div className="successMsg">{success}</div>
  </div>
</div>

        </div>
    );
}

export default SearchCard;