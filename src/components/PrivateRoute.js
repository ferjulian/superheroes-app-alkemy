import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) =>{

    const user = localStorage.getItem('token');

    return(

        
        <Route exac={props.exac} path={props.path}>
            {user ? <props.Component /> : <Redirect to="/Login" /> }
        </Route> 
        
    );
}

export default PrivateRoute;