import axios from 'axios'
import Router from 'next/router'
import {
    IS_SUBMITTING_INFO,
    IS_SUBMITTED_INFO,
    RECIEVED_ERROR
   } from './types'

 import { API } from '../../../config'
import { getCookie } from '../../../utils/cookie';


 function isSubmiting() {
    return{
      type : IS_SUBMITTING_INFO
    }
  }

  function isSubmit(data) {
    return{
      type : IS_SUBMITTED_INFO,
      payload : data
    }
  }

  function isError() {
    return{
      type : RECIEVED_ERROR
    }
  }
  

const orgInfoAction = (data) => {

    return (dispatch) => {

        dispatch(isSubmiting())
        
        let teams = {
          title: data.username,
          desc: data.email,
          cover: data.registeredCountry,
          website: data.website,
          registered: data.isregistered,
          type: "ORGANIZATION"
        };
        
        fetch(`${API}/api/v1/teams/`, {
          crossDomain: "true",
          method: "POST",
          credentials: "include",
          headers: {
            "X-CSRFToken": "34zohm1hqqmYAs204AdFOzbxlFUzImSKkNq2A0liNHaiJib2hwSNAhhNCTMPl0CK",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(teams)
        })
        .then(r => r.json())
        .then((response) => {
          dispatch(isSubmit(response));
          Router.push('/competitionInfo');
        })
        .catch((error)=>{
          dispatch(isError());
        })
    }
}

export default {
    orgInfoAction
  };
