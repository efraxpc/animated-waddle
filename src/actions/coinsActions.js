import axios from 'axios'
import Cookies from 'universal-cookie'

import {
  FETCH_COINS_REQUEST,
  FETCH_COINS_SUCCESS,
  FETCH_COINS_ERROR,
  LAUNCH_LOGIN_USER,
  FETCH_LOGIN_SUCCESS,
  FETCH_USER,
} from './actionTypes'

import { request, received, error } from '../shared/redux/baseActions'


export const loginUser = params => dispatch => {
  dispatch(received(LAUNCH_LOGIN_USER))
  const { email, password } = params
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:3001/v1/users/login',
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
    .then(response => dispatch(received(FETCH_LOGIN_SUCCESS, response.data)))
    .then(response => {
      const { token, user } = response.payload
      const cookies = new Cookies()
      cookies.set('_session_token', { token })
      cookies.set('_session_user', { user })
    })
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_COINS_ERROR))
    })
}

export const fetchUser = () => dispatch => {
  return dispatch(received(FETCH_USER))
}

export const fetchCoins = () => dispatch => {
  dispatch(request(FETCH_COINS_REQUEST))

  const axiosData = {
    method: 'GET',
    url: 'https://api.coinmarketcap.com/v1/ticker/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_COINS_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_COINS_ERROR))
    })
}
