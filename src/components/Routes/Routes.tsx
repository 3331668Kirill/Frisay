import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Page404} from "../404/404";
import {Home} from "../Home/Home";
import {Login} from "../Login/Login";
import {Profile} from "../Profile/Profile";
import {Registration} from "../Registration/Registration";
import {Test} from "../Test/Test";


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
