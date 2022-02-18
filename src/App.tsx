import React, {useEffect, useState} from 'react';
import './App.css';
import RoutesMain from "./routing/Routing";
import {HashRouter, NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {checkMeTC} from "./pages/Login/login-reducer";
import {Loader} from "./components/Loader/Loader";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkMeTC({}, setIsLoading))
    }, [])

    if (isLoading) return <Loader wrapperStyles={{backgroundColor: '#282c34'}}/>
    return (
        <div className="App">
            <HashRouter>
                <header>
                    <div>
                        <NavLink to={'/'}> Home </NavLink>
                        <NavLink to={'/login'}> Login </NavLink>
                        <NavLink to={'/profile'}> Profile </NavLink>
                        <NavLink to={'/Registration'}> Registration </NavLink>
                        <NavLink to={'/recover-password'}> Forgot password </NavLink>
                        <NavLink to={'/Test'}> Test </NavLink>
                    </div>
                </header>
                <RoutesMain/>
            </HashRouter>
        </div>
    );
}

export default App;
