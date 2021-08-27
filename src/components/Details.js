import React from 'react';
import { useLocation} from 'react-router-dom';


const Details = (props) =>{

    const location = useLocation()


    return(
        <div>
            <h2>Detalles del heroe</h2>

            {location.state? <h5>{location.state.hero.name}</h5> : <h5>Todavia no selecionaste ningun heroe</h5> }
            
           
            

        </div>
    );
}

export default Details;