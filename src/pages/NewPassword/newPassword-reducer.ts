import { Dispatch } from "redux"
import { api } from "../../api/api";

export type StatusType = 'idle' | 'success' | 'failed' | 'loading'

export type NewPasswordInitialStateType = {
    status: StatusType
    error?: string
    info?: string
}
export type ActionsType =
    | ReturnType<typeof NewPasswordAC>
    | ReturnType<typeof SetNewPasswordErrorAC>
    | ReturnType<typeof SetNewPasswordStatusAC>

const initialState = {} as NewPasswordInitialStateType
export const newPasswordReducer = (state: NewPasswordInitialStateType = initialState, action: ActionsType): NewPasswordInitialStateType => {
    switch (action.type) {

        case 'auth/NEWPASSWORD': {
            let stateCopy = { ...state, ...action.data }
            return stateCopy
        }
        case 'auth/NEWPASSWORD-ERROR': {
            let stateCopy = { ...state, ...action.data }
            return stateCopy
        }
        case 'auth/NEWPASSWORD-STATUS': {
            let stateCopy = { ...state, ...action.data }
            return stateCopy
        }

        default:
            return state
    }
}

export const NewPasswordAC = (data: { info: string }) => {
    return ({ type: 'auth/NEWPASSWORD', data } as const)
}
export const SetNewPasswordErrorAC = (data: { error: string }) => {
    return ({ type: 'auth/NEWPASSWORD-ERROR', data } as const)
}
export const SetNewPasswordStatusAC = (data: { status: StatusType }) => {
    return ({ type: 'auth/NEWPASSWORD-STATUS', data } as const)
}

export const setNewPasswordTC = (data: { password: string, resetPasswordToken: string }) => (dispatch: Dispatch) => {
    dispatch(SetNewPasswordStatusAC({ status: "loading" }))
    api.setNewPassword(data).
        then((res) => {
            dispatch(NewPasswordAC(res.data))
            dispatch(SetNewPasswordStatusAC({ status: "success" }))
        }).catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            dispatch(SetNewPasswordErrorAC({ error: error }))
            dispatch(SetNewPasswordStatusAC({ status: 'failed' }))
        })
}

