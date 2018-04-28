import React from 'react';
import {REGISTER_CHANGE, REGISTER_CREATE,REGISTER_CREATE_SUCCESS,REGISTER_CREATE_FAILED, REGISTER_CREATE_FAILED_EMAIL} from '.././actions/types';

const INITIAL_STATE={
    username:'',
    password:'',
    email:'',
    nameSurname:'',
    loading:false,
    emailFailed:false,
    success:false
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case REGISTER_CHANGE:
        return {...state,[action.payload.props]:action.payload.value};
        case REGISTER_CREATE:
        return {...state,loading:true};
        case REGISTER_CREATE_FAILED:
        return{...state,loading:false};
        case REGISTER_CREATE_FAILED_EMAIL:
        return {...state,emailFailed:true,loading:false};
        case REGISTER_CREATE_SUCCESS:
        return{INITIAL_STATE,success:true,emailFailed:false,loading:false}; 
        default:
        return state;
    }
}
