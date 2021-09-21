import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Navbar.css';


const Navbar = (props) =>{

const [loginPage, setLoginPage] = useState(false);

const onButtonClick = () => {
  localStorage.removeItem('team');
  localStorage.removeItem('token');
  setLoginPage(!loginPage);
  props.navSwitch('off');
}


return(
    <div>
            
    <nav className="navbar fixed-top navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Superheroes</a>
      <Link to="/Home">Home</Link>
      <Link to="/Search">Search</Link>
      <button onClick={() => onButtonClick()}>Sign out</button>
    </nav>

    {loginPage == true? <Redirect to="/Login"/> : ''}
            
    </div>
    
);
}

export default Navbar;