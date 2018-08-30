import authActions from './auth/authAction';
import orgInfoAction from './organizationInfo/orgInfoAction';

export default {
  ...authActions,
  ...orgInfoAction,
};