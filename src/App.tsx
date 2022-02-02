import React from 'react';
import './App.css';
import RoutesMain from "./components/Routes/Routes";
import {BrowserRouter, HashRouter, NavLink} from "react-router-dom";

function App() {
    return (

        <div className="App">
            <HashRouter>
                <header className="App-header">

                    <RoutesMain/>
                </header>
                <div>
                    <NavLink to={'/'}> Home </NavLink>
                    <NavLink to={'/login'}> Login </NavLink>
                    <NavLink to={'/profile'}> Profile </NavLink>
                    <NavLink to={'/Registration'}> Registration </NavLink>
                    <NavLink to={'/Test'}> Test </NavLink>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
