import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {registrationReducer} from "./reducers/registration-reducer";
import {authReducer} from "./reducers/registration-reducer";
import {loginReducer} from "../pages/Login/login-reducer";
import {recoverPassReducer} from "../pages/RecoverPass/recoverPass-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    tasks: registrationReducer
    tasks: authReducer,
    login: loginReducer,
    recoverPass: recoverPassReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

