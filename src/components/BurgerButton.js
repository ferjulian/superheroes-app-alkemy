import React from 'react';
import './BurgerButton.css';

const BurgerButton = (props) =>{

    return(
        <div className="burguer">
        <div onClick={props.handleClick} 
             className={`hamburger ${props.clicked ? 'is-active': ''}`} 
             id="hamburger-11"
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </div>
    );
}

export default BurgerButton;