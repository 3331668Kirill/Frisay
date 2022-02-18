import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./login-reducer";
import {Link, Navigate} from "react-router-dom";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import SuperCheckbox from "../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import s from "./Login.module.css"
import {AppRootStateType} from "../../redux/store";
import {PATH} from "../../routing/Routing";
import {Loader} from "../../components/Loader/Loader";

const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const userId = useSelector<AppRootStateType, string>(state => state.login._id)
    const error = useSelector<AppRootStateType, string | undefined>(state => state.login.error)

    const login = () => {
        dispatch(loginTC(email, password, rememberMe, setIsLoading))
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
        return <Navigate to={`/${PATH.PROFILE}`}/>
    }
    return (
        <div className={s.loginPage}>
            <SuperInputText placeholder='email' onChangeText={handleEmail}/>
            <SuperInputText placeholder='password' type='password' onChangeText={handlePassword}/>
            <SuperCheckbox onChangeChecked={handleRememberMe}>Remember Me</SuperCheckbox>
            <SuperButton onClick={login}>Log In</SuperButton>
            <Link to={`/${PATH.REGISTRATION}`}>
                <SuperButton>Register</SuperButton>
            </Link>
            {error && <p className={s.errorText}>{error}</p> }
            {isLoading && <Loader />}
        </div>
    );
}

export default Login;
