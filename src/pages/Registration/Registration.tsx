import React, {useState} from "react";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import s from './registration.module.css'
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";



export const Registration = () => {
    const [registerInfo, setRegisterInfo] = useState<{email: string, password:string}>({
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const emailInputHandler = (e: any) => setRegisterInfo({password: registerInfo.password,email: e.currentTarget.value})
    const passwordInputHandler = (e: any) => setRegisterInfo({password: e.currentTarget.value,email: registerInfo.email})
    const confirmPasswordHandler = (e: any) => setConfirmPassword(e.currentTarget.value)

    const submitRegister = () => {
        console.log(registerInfo)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.inputBlock}>
                <p>Email</p>
                <SuperInputText value={registerInfo.email} onInput={(e) => emailInputHandler(e)} />
            </div>
            <div className={s.inputBlock}>
                <p>Password</p>
                <SuperInputText value={registerInfo.password} onInput={(e) => passwordInputHandler(e)}/>
            </div>
            <div className={s.inputBlock}>
                <p>Confirm password</p>
                <SuperInputText error={error} value={confirmPassword} onInput={confirmPasswordHandler}/>
            </div>
            <div className={s.buttonBlock}>
                <SuperButton>Cancel</SuperButton>
                <SuperButton onClick={submitRegister}>Register</SuperButton>
            </div>
        </div>
    )
}
