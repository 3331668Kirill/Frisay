import React, {useState} from "react";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {recoverPassTC} from "./recoverPass-reducer";
import {AppRootStateType} from "../../redux/store";
import {Navigate} from "react-router-dom";




export const RecoverPassword = () => {
    const [email, setEmail] = useState<string>('')
    const error = useSelector<AppRootStateType,string|undefined>(state=> state.recoverPass.error)
    const info = useSelector<AppRootStateType,string|undefined>(state=> state.recoverPass.info)

    const dispatch = useDispatch();

    const recoverPass = () => {
        dispatch(recoverPassTC(email))
    }

    const handleEmail = (email: string) => {
        setEmail(email.trim())
    }

    return (
        <div>
            <SuperInputText placeholder='email' onChangeText={handleEmail}/>
            <p> Input your e-mail and we will send you further instractions</p>
            <SuperButton onClick={recoverPass}>Send instructions</SuperButton>
            {error && <div style={{color:'red'}}>{error}</div>}
            {info && <Navigate to={'/'}/>}
        </div>
    )
}