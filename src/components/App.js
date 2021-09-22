import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Details from './Details';
import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';



const App = () =>{

    
const [nav, setNav] = useState('');

    const onButtonClick = (arg) => { 
        if(arg === 'on'){
            setNav(arg);
            
        }else if(arg === 'off'){
            setNav(arg);
        }
        
    }
    
    const data = localStorage.getItem('team');

    
    return(
        <div>
            <Router>
            { data ? <Navbar navSwitch={onButtonClick} /> : ''}
            <Switch>
            
                <PrivateRoute exac path="/Home" Component={Home}/>
                <PrivateRoute exac path="/Search" Component={Search}/>
                <PrivateRoute exac path="/Details" Component={Details} />
                <Route exac path="/">
                <Login navSwitch={onButtonClick}/>    
                </Route>   
            </Switch>
        </Router>
            



        </div>
    );
}

export default App;