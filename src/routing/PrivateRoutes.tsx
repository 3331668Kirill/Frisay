import React from 'react'
import {useTypedSelector} from "../hooks/redux";
import {Navigate, NavLink, Outlet} from 'react-router-dom'
import {PATH} from './Routing';


export const PrivateRoutes = () => {
    const user = useTypedSelector(state => state.login)
    const isAuth = !!user.email

    if (!isAuth) return <Navigate to={PATH.LOGIN}/>

    return (
        <>
            <header className="main-header">
                <ul>
                    <li>
                        <NavLink to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.LIST_PACKS}>
                            Packs list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={PATH.PROFILE}>
                            Profile
                        </NavLink>
                    </li>
                </ul>
            </header>
            <div className="main-body">
                <Outlet/>
            </div>
        </>
    )
}
