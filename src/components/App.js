import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Search from './Search';
import Details from './Details';
import Prueba from './Prueba';

const App = () =>{
    return(
        <div>
            <h1>Superheroes Pagina</h1>
            

            <Router>
            <Prueba />
            <Link to="/Search">Go Search!</Link>
            <Link to="/Login">Go Login!</Link>
            <Link to="/Home">Go Home!</Link>
            <Link to="/Details">Go Details!</Link>

            <Switch>
                <Route exac path="/Home">
                    <Home />
                </Route>
                <Route exac path="/Login">
                    <Login />
                </Route>
                <Route exac path="/Search">
                    <Search />
                </Route>
                <Route exac path="/Details">
                    <Details />
                </Route>
            </Switch>
            </Router>
            
        </div>
    );
}

export default App;