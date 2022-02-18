import React from "react";
import { useDispatch } from "react-redux";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import { logoutTC } from "../Login/login-reducer";
import {useTypedSelector} from "../../hooks/redux";
import { DateTime } from 'luxon'

import s from './Profile.module.css'



export const Profile = () => {
   const dispatch = useDispatch();
   const handleLogout = () => dispatch(logoutTC());

   const user = useTypedSelector(state => state.login)

    const registerData = DateTime.fromISO(user.created).toFormat('DDD')

   return (
      <div className={s.wrapper}>
          {user.avatar ? <img src={user.avatar} alt="AVATAR"/> : <div className={'avatar'}>{user.name.substring(0, 2)}</div>}

         <span>Your Email: {user.email}</span>
         <span>Your NickName: {user.email}</span>
          <span>Date of registration: {registerData}</span>
         <div>
            <SuperButton onClick={handleLogout}>Logout</SuperButton>
         </div>
      </div>
   )
}
