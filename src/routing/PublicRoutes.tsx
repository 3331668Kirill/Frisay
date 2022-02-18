import React from 'react'
import {useTypedSelector} from "../hooks/redux";
import {Navigate, Outlet} from 'react-router-dom'


export const PublicRoutes = () => {
    const user = useTypedSelector(state => state.login)
    const isAuth = Object.keys(user).length !== 0

    if (isAuth) return <Navigate to={'/'} replace />
    return <Outlet/>
}
