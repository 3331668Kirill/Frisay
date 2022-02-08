import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./login-reducer";
import {Link, Navigate} from "react-router-dom";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import s from "./Login.module.css"
import {AppRootStateType} from "../../redux/store";

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const dispatch = useDispatch();
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)

    const login = () => {
        dispatch(loginTC(email, password, rememberMe))
    }
    const handleEmail = (email: string) => {
        setEmail(email.trim())
    }
    const handlePassword = (password: string) => {
        setPassword(password.trim())
    }
    const handleRememberMe = (checked: boolean) => {
        setRememberMe(checked)
    }

    if (userId !== undefined) {
        return <Navigate to='/profile'/>
    }
    return (
        <div className={s.loginPage}>
            <SuperInputText placeholder='email' onChangeText={handleEmail}/>
            <SuperInputText placeholder='password' type='password' onChangeText={handlePassword}/>
            <SuperCheckbox onChangeChecked={handleRememberMe}>Remember Me</SuperCheckbox>
            <SuperButton onClick={login}>Log In</SuperButton>
            <Link to={'/registration'}><SuperButton>Register</SuperButton></Link>
        </div>
    );
}

export default Login;