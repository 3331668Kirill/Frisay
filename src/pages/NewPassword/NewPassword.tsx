import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import SuperInputText from "../../components/SuperComponents/SuperInputText/SuperInputText";
import SuperButton from "../../components/SuperComponents/SuperButton/SuperButton";
import { AppRootStateType } from "../../redux/store";
import { setNewPasswordTC, StatusType } from './newPassword-reducer';

const NewPassword = () => {

    const dispatch = useDispatch();
    const { token } = useParams<'token'>()
    const [password, setPassword] = useState<string>('')

    const status = useSelector<AppRootStateType, StatusType>(state => state.newPassword.status)

    const handleClickNewpassword = () => {
        if (token) {
            dispatch(setNewPasswordTC({ password, resetPasswordToken: token }))
        }
    }

    const handleChangePassword = (password: string) => {
        setPassword(password.trim())
    }

    if (status ==='success') {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <SuperInputText placeholder='password' type='password' onChangeText={handleChangePassword} />
            <SuperButton onClick={handleClickNewpassword}>Submit</SuperButton>
        </div>
    );
}

export default NewPassword;