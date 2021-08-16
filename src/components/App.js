import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Details from './Details';
import PrivateRoute from './PrivateRoute';

const App = () =>{
    return(
        <div>
            <h1>Superheroes Pagina</h1>
            

            <Router>
            <Link to="/Search">Go Search!</Link>
            <Link to="/Login">Go Login!</Link>
            <Link to="/Home">Go Home!</Link>
            <Link to="/Details">Go Details!</Link>

            <Switch>
                <Route exac path="/Login" component={Login} />
                <PrivateRoute exac path="/Home" Component={Home}/>
                <PrivateRoute exac path="/Search" Component={Search}/>
                <PrivateRoute exac path="/Details" Component={Details} />
            </Switch>
            </Router>
            
        </div>
    );
}

export default App;