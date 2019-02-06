import axios from 'axios'

import {
  SAVE_LICENCE_REQUEST,
  SAVE_LICENCE_SUCCESS,
  SAVE_LICENCE_ERROR
} from './actionTypes'

import { request, received, error } from '../shared/redux/baseActions'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const saveLicence = params => dispatch => {
  const user = cookies.get('user')
  const tokenStr = user.token
  dispatch(received(SAVE_LICENCE_REQUEST))
  const { id, dueDate } = params
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:3001/v1/licences/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    },
    data: {
      id,
      dueDate,
      user
    }
  }
  return axios(axiosData)
    .then(response => dispatch(received(SAVE_LICENCE_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(SAVE_LICENCE_ERROR))
    })
}
