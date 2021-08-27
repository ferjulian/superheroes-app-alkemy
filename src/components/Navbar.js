import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () =>{


return(
    <div>
            <Link to="/Search">Go Search!</Link>
            <Link to="/Home">Go Home!</Link>
            
    </div>
    
);
}

export default Navbar;