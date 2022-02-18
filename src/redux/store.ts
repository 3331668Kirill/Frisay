import { newPasswordReducer } from '../pages/NewPassword/newPassword-reducer';
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "../pages/Login/login-reducer";
import {recoverPassReducer} from "../pages/RecoverPass/recoverPass-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    login: loginReducer,
    recoverPass: recoverPassReducer,
    newPassword: newPasswordReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
