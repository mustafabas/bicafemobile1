import {combineReducers} from 'redux';
import LoginReducers from './LoginReducers';
import RegisterReducers from './RegisterReducers';


export default combineReducers({
    LoginResponse:LoginReducers,
    RegisterResponse:RegisterReducers,
   
})