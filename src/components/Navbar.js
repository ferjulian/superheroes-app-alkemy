import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


const Navbar = () =>{


return(
    <div>
            
    <nav className="navbar fixed-top navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Superheroes</a>
      <Link to="/Home">Home</Link>
      <Link to="/Search">Search</Link>
    </nav>
            
    </div>
    
);
}

export default Navbar;