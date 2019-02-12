import axios from 'axios'
import Cookies from 'universal-cookie'
import { myConfig } from '../config.js'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  REQUEST_LOGIN_USER,
  FETCH_LOGIN_SUCCESS,
  FETCH_USER,
  FETCH_LOGIN_ERROR
} from './actionTypes'

import { request, received, error } from '../shared/redux/baseActions'

const cookies = new Cookies()

export const fetchUsers = () => dispatch => {
  const userInfo = cookies.get('user')
  const tokenStr = userInfo.token
  dispatch(request(FETCH_USERS_REQUEST))
  const axiosData = {
    method: 'GET',
    url: `${myConfig.API_URL}/users`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    }
  }

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_USERS_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_USERS_ERROR))
    })
}

export const fetchUser = () => dispatch => {
  return dispatch(received(FETCH_USER))
}

export const loginUser = params => async dispatch => {
  dispatch(received(REQUEST_LOGIN_USER))
  const { email, password } = params
  const axiosData = {
    method: 'POST',
    url: `${myConfig.API_URL}/users/login`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    data: {
      email,
      password
    }
  }
  return axios(axiosData)
    .then(response => dispatch(received(FETCH_LOGIN_SUCCESS), response.data))
    .then(data => {
      const { payload } = data
      cookies.set('user', payload)
    })
    .catch(err => {
      dispatch(error(FETCH_LOGIN_ERROR))
    })
}
