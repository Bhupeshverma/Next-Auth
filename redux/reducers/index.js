import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import orgInfoReducer from "./organizationInfo/orgInfoReducer";
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  authentication: authReducer,
  orgInfoReducer,
  form: formReducer
});



export default rootReducer;