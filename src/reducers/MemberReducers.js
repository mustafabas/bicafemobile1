import {MEMBER_INFORMATION,MEMBER_INFORMATION_LOADING,MEMBER_UPDATE_CHANGE} from '.././actions/types.js';

const INITIAL_STATE={
  member:'',
  loading:false,
  NameSurname:'',
  ShortAbout:'',
  MemberEmail:''


};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MEMBER_INFORMATION:
      return{...state,member:action.payload.Member,loading:false};
      case MEMBER_INFORMATION_LOADING:
      return {...state,loading:true};
      case MEMBER_UPDATE_CHANGE:
      return {...state,[action.payload.props]:action.payload.value};
      default:
        return state;
    }
  };