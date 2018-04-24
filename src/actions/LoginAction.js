import {Alert} from 'react-native';

import {LOGIN_CHANGE,LOGIN_USER,LOGIN_USER_SUCCESS, LOGIN_USER_FAILED} from './types';

export const LoginChanged = ({ props, value }) => {
    return (dispatch) => {
      dispatch({
        type: LOGIN_CHANGE,
        payload: { props, value }
      });
    };
  };