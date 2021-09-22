import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsInfo from './DetailsInfo';



const Details = (props) =>{

    const location = useLocation()

    return(
        <div className="wrapper">

            {location.state? <DetailsInfo/> : <h5>You haven't selected any hero yet.</h5> }    
            
        </div>
    );
}

export default Details;