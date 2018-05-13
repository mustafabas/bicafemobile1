import {MEMBER_INFORMATION,MEMBER_INFORMATION_LOADING} from '.././actions/types.js';

const INITIAL_STATE={
  member:'',
  loading:false

};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MEMBER_INFORMATION:
      return{...state,member:action.payload.Member,loading:false};
      case MEMBER_INFORMATION_LOADING:
      return {...state,loading:true}
      default:
        return state;
    }
  };