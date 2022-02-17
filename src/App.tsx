import React from 'react';
import './App.css';
import RoutesMain from "./routing/Routing";
import { HashRouter, NavLink} from "react-router-dom";

function App() {
    return (

        <div className="App">
            <HashRouter>
                <header className="App-header">
                    <div>
                        <NavLink to={'/'}> Home </NavLink>
                        <NavLink to={'/login'}> Login </NavLink>
                        <NavLink to={'/profile'}> Profile </NavLink>
                        <NavLink to={'/Registration'}> Registration </NavLink>
                        <NavLink to={'/recover-password'}> Forgot password </NavLink>
                        <NavLink to={'/Test'}> Test </NavLink>
                        <NavLink to={'/list-packs'}> Packs </NavLink>
                    </div>
                    <RoutesMain/>
                </header>

            </HashRouter>
        </div>
    );
}

export default App;
