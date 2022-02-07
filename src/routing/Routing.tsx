import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Page404} from "../pages/404/404";
import {Home} from "../pages/Home/Home";
import {Profile} from "../pages/Profile/Profile";
import {Registration} from "../pages/Registration/Registration";
import {Test} from "../components/Test/Test";
import Login from "../pages/Login/Login";


export const PATH = {
    LOGIN: 'login',
    PROFILE: 'profile',
    REGISTRATION: 'registration',
    TEST: 'test',

}

function RoutesMain() {
    return (
        <div>

            <Routes>

                <Route path='/' element={<Home/>}/>
                <Route path='/Frisay' element={<Home/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path='*' element={<Page404/>}/>

            </Routes>
        </div>
    )
}

export default RoutesMain
