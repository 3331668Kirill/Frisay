import React from 'react'
import {useTypedSelector} from "../hooks/redux";
import {Navigate, Outlet} from 'react-router-dom'
import { PATH } from './Routing';


export const PublicRoutes = () => {
    const user = useTypedSelector(state => state.login)
    const isAuth = !!user.email

    if (isAuth) return <Navigate to={PATH.LIST_PACKS} replace />
    return <Outlet/>
}
