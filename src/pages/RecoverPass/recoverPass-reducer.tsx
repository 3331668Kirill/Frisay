import {Dispatch} from "redux"
import {api} from "../../api/api";

export type RecoverPassInitialStateType = {
    info:string
    error?: string

}
export type ActionsType = ReturnType<typeof RecoverPassAC>

const initialState = {} as RecoverPassInitialStateType
export const recoverPassReducer = (state: RecoverPassInitialStateType = initialState, action: ActionsType): RecoverPassInitialStateType => {
    switch (action.type) {
        case 'auth/RECOVER_PASSWORD': {
            let stateCopy = {...state}
            stateCopy = action.data
            console.log(stateCopy)

            return stateCopy
        }
        default:
            return state
    }
}

export const RecoverPassAC = (data:RecoverPassInitialStateType ) => {
    return ({type: 'auth/RECOVER_PASSWORD', data} as const)
}

export const recoverPassTC = (email: string) => (dispatch: Dispatch) => {
    api.recoverPass({email,
        from: "test-front-admin <3331668@mail.ru>",
        message: `<div style="background-color: lime; padding: 15px"> 
            password recovery link: <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`
}).then((res) => {
        dispatch(RecoverPassAC(res.data))
    }).catch((err) => {
        if(err.message === 'Request failed with status code 400'){
            dispatch(RecoverPassAC({info:'',error:'Email address not valid /ᐠ-ꞈ-ᐟ\\'}))
        }
        if(err.message === 'Request failed with status code 404'){
            dispatch(RecoverPassAC({info:'',error:'Email address not found /ᐠ-ꞈ-ᐟ\\\\'}))
        }
        console.log(err.message === 'Request failed with status code 400')
    })
}