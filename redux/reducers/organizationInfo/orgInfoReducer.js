import { IS_SUBMITTING_INFO, IS_SUBMITTED_INFO, RECIEVED_ERROR } from '../../actions/organizationInfo/types';
const initialState = {
  spinner: false,
  error: false,
  orgInfo: null
};

export default (state = initialState, action) => {
  switch(action.type) {
  case IS_SUBMITTING_INFO:
    return {...state , spinner : true};
  case IS_SUBMITTED_INFO:
    return {...state , spinner : false , orgInfo : action.payload}
  case RECIEVED_ERROR:
    return {...state , spinner : false , error : true}
  default:
    return state;
  }
};