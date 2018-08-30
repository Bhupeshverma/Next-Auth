import { AUTHENTICATE, DEAUTHENTICATE, IS_LOGGING_IN, IS_LOGGED_IN, UNAUTHORIZED, RECIEVED_ERROR, IS_TOKEN, LOGGED_OUT } from '../../actions/auth/types';
const initialState = {
  token: null,
  spinner: false,
  user: null,
  error: false,
  unautherized: false,
  logout: false
};

export default (state = initialState, action) => {
  switch(action.type) {
  case IS_LOGGING_IN:
    return {...state , spinner : true};
  case IS_TOKEN:
    return { ...state, token: action.payload, spinner : false };
  case IS_LOGGED_IN:
    return {...state , spinner : false , user : action.payload, logout: false}
  case UNAUTHORIZED:
    return {...state , spinner : false , unauthorized : true}
  case RECIEVED_ERROR:
    return {...state , spinner : false , error : true}
  case LOGGED_OUT:
    return {...state , logout: true , token: null , spinner: false, user: null, error: false, unautherized: false}
  default:
    return state;
  }
};