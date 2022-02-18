import React, {FormEvent, useState} from "react";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import s from './registration.module.css'
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import {api} from "../../api/api";
import {AxiosError} from "axios";
import { Loader } from "../../components/Loader/Loader";
import {Link, useNavigate} from "react-router-dom";
import { PATH } from "../../routing/Routing";

const emailRe = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u


export const Registration = () => {
    const [registerInfo, setRegisterInfo] = useState<{email: string, password:string}>({
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate()


    const emailInputHandler = (e: FormEvent<HTMLInputElement>) => {
        setError('')
        setRegisterInfo({...registerInfo, email: e.currentTarget.value})
    }
    const passwordInputHandler = (e: FormEvent<HTMLInputElement>) => {
        setError('')
        setRegisterInfo({...registerInfo, password: e.currentTarget.value})
    }
    const confirmPasswordHandler = (e: FormEvent<HTMLInputElement>) => {
        setError('')
        setConfirmPassword(e.currentTarget.value)
    }

    const validate = () => {
        if(!emailRe.test(registerInfo.email)){
            setError('Введите коректный Email')
            return
        }
        if(registerInfo.password.length < 7){
            setError('Пароль должен быть больше 7ми символов')
            return
        }
        if(registerInfo.password !== confirmPassword){
            setError('Пароль не совпадает')
            return
        }
        if(!registerInfo.password.length || !registerInfo.email.length || !confirmPassword.length){
            setError('Заполните все поля')
            return
        }
        submitRegister()
    }

    const submitRegister = async () => {
        try {
            setLoading(true)
            await api.register(registerInfo)
            navigate(`/${PATH.PROFILE}`, {replace: true})
        } catch (error){
            const err = error as AxiosError
            if(err.response?.data){
                setError(err.response?.data.error)
                return
            }
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (<>
            <div className={s.wrapper}>
                <div className={s.inputBlock}>
                    <p>Email</p>
                    <SuperInputText value={registerInfo.email} onInput={emailInputHandler}/>
                </div>
                <div className={s.inputBlock}>
                    <p>Password</p>
                    <SuperInputText type='password' value={registerInfo.password} onInput={passwordInputHandler}/>
                </div>
                <div className={s.inputBlock}>
                    <p>Confirm password</p>
                    <SuperInputText type='password' value={confirmPassword} onInput={confirmPasswordHandler}/>
                </div>
                {<p className={s.error}>{error || ''}</p>}
                <div className={s.buttonBlock}>
                    <SuperButton onClick={() => navigate(-1)}>Cancel</SuperButton>
                    <SuperButton onClick={validate}>Register</SuperButton>
                </div>
                <p className={s.loginText}>
                    if you have an account?
                    <Link className={s.loginLink} to={`/${PATH.LOGIN}`}>Sing In</Link>
                </p>
            </div>
            {loading && <Loader /> }
        </>

    )
}
