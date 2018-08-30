import Router from 'next/router';
import axios from 'axios';
import {
   AUTHENTICATE, 
   DEAUTHENTICATE,
   IS_LOGGING_IN,
   IS_LOGGED_IN,
   UNAUTHORIZED,
   RECIEVED_ERROR,
   IS_TOKEN,
   LOGGED_OUT

  } from './types';
import { API } from '../../../config';
import { setCookie, removeCookie } from '../../../utils/cookie';


function isLoggingIn() {
  return{
    type : IS_LOGGING_IN
  }
}

function isToken(data) {
  return{
    type : IS_TOKEN,
    payload : data
  }
}

function loggedIn(data) {
  return{
    type : IS_LOGGED_IN ,
    payload : data
  }
}

function unAuthorized() {
  return {
    type : UNAUTHORIZED
  }
}

function recievedError() {
  return {
    type : RECIEVED_ERROR
  }
}

function loggedOut() {
  return{
    type : LOGGED_OUT
  }
}

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email, password }, type) => {
  if (type !== 'signin' && type !== 'signup') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    const data = JSON.stringify( {email, password});
    dispatch(isLoggingIn());
    fetch(`${API}/rest-auth/login/`, {
			method: "OPTIONS",
			credentials: "include",
		}).then(resp => console.log(resp.headers)
    )

    axios.post(`${API}/rest-auth/login/`, data, {	headers: {"Content-Type": "application/json"}})
      .then((response) => {
        setCookie('token', response.data.key);
        dispatch(isToken(response.data.key));
        axios.get(`${API}/rest-auth/user/` + response.data.key + '/')
          .then((response) => {
            const user = JSON.stringify(response.data);
            var d = new Date();
              d.setTime(d.getTime() + (1*24*60*60*1000));
              var expires = "expires=" + d.toGMTString();
              document.cookie = 'user' + "=" + user + ";" + expires + ";path=/";
              dispatch(loggedIn(response.data));
          })
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            dispatch(unAuthorized());
          }
        }
        else if (error.request) {
          dispatch(recievedError());
        } else {
          dispatch(recievedError());
        }
      });

  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (user) => {
  return (dispatch) => {
    //console.log('user',user);
    let userr = JSON.parse(user);
    
    dispatch(loggedIn(userr));
  };
};

// removing the token
const deauthenticate = () => {
  return (dispatch) => {
    removeCookie('token');
    removeCookie('user');
    dispatch(loggedOut());
    Router.push('/');
  };
};


export default {
  authenticate,
  reauthenticate,
  deauthenticate,
};
