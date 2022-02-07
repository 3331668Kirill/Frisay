const initialState = {
    user: {}
}
type InitialStateType = typeof initialState

export const registrationReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state}
        default:
            return state
    }
}
