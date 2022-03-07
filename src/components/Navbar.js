import React,{useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import BurgerButton from './BurgerButton'
import './Navbar.css';


const Navbar = (props) =>{

const [loginPage, setLoginPage] = useState(false);
const [clicked, setClicked] = useState(false);

const onButtonClick = () => {
  localStorage.removeItem('team');
  localStorage.removeItem('token');
  setLoginPage(!loginPage);
  props.navSwitch('off');
}

const handleClick = () =>{

    setClicked(!clicked);
}

return(
    <div>
            
    <nav className="navbar fixed-top navbar-expand-lg navbar-expand-sm navbar-dark bg-dark">
    <a className="navbar_brand" href="/Home">Superheroes</a>
    
    <div className={`link-wrapper ${clicked? 'showLinks-mobile': ''}`}>
    <Link to="/Home" onClick={() => handleClick()} >Home</Link>
    <Link to="/Search" onClick={() => handleClick()}>Search</Link>
    <button className="signOutBtn" onClick={() => onButtonClick()}>Sign out</button>
    
    </div>
    <BurgerButton clicked={clicked} handleClick={handleClick} />
      
    </nav>

    {loginPage === true? <Redirect to="/Login"/> : ''}
            
    </div>
    
);
}

export default Navbar;