import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Test} from '../components/Test/Test';
import {Page404} from "../pages/404/404";
import {Home} from "../pages/Home/Home";
import Login from '../pages/Login/Login';
import NewPassword from '../pages/NewPassword/NewPassword';
import {ListPacks} from "../pages/List/ListPacks";
import {ListCard} from "../pages/List/ListCard";
import {Profile} from "../pages/Profile/Profile";
import {RecoverPassword} from '../pages/RecoverPass/RecoverPassword';
import {Registration} from '../pages/Registration/Registration';
import {PrivateRoutes} from "./PrivateRoutes";
import {PublicRoutes} from "./PublicRoutes";



export const PATH = {
    LOGIN: 'login',
    PROFILE: 'profile',
    REGISTRATION: 'registration',
    TEST: 'test',
    RECOVER_PASSWORD:'recover-password',
    SET_NEW_PASSWORD:'set-new-password/:token',
    LIST_PACKS:'list-packs',
    LIST_CARDS:'list-cards'

}

function RoutesMain() {
    return (
        <div className="main">
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Frisay' element={<Home/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.LIST_PACKS} element={<ListPacks/>}/>
                </Route>
                <Route element={<PublicRoutes/>}>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                    <Route path={PATH.TEST} element={<Test/>}/>
                    <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
                    <Route path={PATH.SET_NEW_PASSWORD} element={<NewPassword/>}/>
                </Route>


                <Route path='/' element={<Home/>}/>
                <Route path='/Frisay' element={<Home/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={PATH.RECOVER_PASSWORD} element={<RecoverPassword/>}/>
                <Route path={PATH.SET_NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.LIST_PACKS} element={<ListPacks/>}/>
                <Route path={PATH.LIST_CARDS} element={<ListCard/>}/>
                <Route path='404' element={<Page404/>}/>
                <Route path='*' element={<Navigate to={'404'}/>}/>

            </Routes>
        </div>
    )
}

export default RoutesMain
