import React from "react";
import { useDispatch } from "react-redux";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import { logoutTC } from "../Login/login-reducer";



export const Profile = () => {
   const dispatch = useDispatch();
   const handleLogout = () => dispatch(logoutTC());

   return (
      <div>
         PROFILE PAGE
         <div>
            <SuperButton onClick={handleLogout}>Logout</SuperButton>
         </div>
      </div>
   )
}