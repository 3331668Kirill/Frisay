import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginTC} from "./login-reducer";
import {Link} from "react-router-dom";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const dispatch = useDispatch();

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
    return (
        <div>
            <SuperInputText placeholder='email' onChangeText={handleEmail}/>
            <SuperInputText placeholder='password' type='password' onChangeText={handlePassword}/>
            <SuperCheckbox onChangeChecked={handleRememberMe}>Remember Me</SuperCheckbox>
            <SuperButton onClick={login}>Log In</SuperButton>
            <Link to={'/registration'}><SuperButton>Register</SuperButton></Link>
        </div>
    );
}

export default Login;