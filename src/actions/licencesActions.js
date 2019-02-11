import axios from 'axios'
import _ from 'lodash'
import {
  SAVE_LICENCE_REQUEST,
  SAVE_LICENCE_SUCCESS,
  SAVE_LICENCE_ERROR, 
  FETCH_LICENCES_REQUEST,
  FETCH_LICENCES_SUCCESS,
  FETCH_LICENCES_ERROR,
  FETCH_LICENCE_REQUEST,
  FETCH_LICENCE_SUCCESS,
  REQUEST_SHOW_MODAL,
  UPDATE_LICENCE_REQUEST,
  UPDATE_LICENCE_SUCCESS,
  UPDATE_LICENCE_ERROR, 
} from './actionTypes'

import { request, received, error } from '../shared/redux/baseActions'

import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const requestShowModal = () => dispatch => {
  return dispatch(received(REQUEST_SHOW_MODAL))
}

export const updateLicence = params => dispatch => {
  const userCookie = cookies.get('user')
  const tokenStr = userCookie.token
  dispatch(received(UPDATE_LICENCE_REQUEST))
  console.log('updating licence');
  const { user, dueDate, isActive, _id } = params
  const axiosData = {
    method: 'PATCH',
    url: 'http://localhost:3001/v1/licences/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    },
    data: {
      user,
      dueDate,
      isActive,
      _id
    }
  }
  return axios(axiosData)
    .then(response => dispatch(received(UPDATE_LICENCE_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(UPDATE_LICENCE_ERROR))
    })
}

export const saveLicence = params => dispatch => {
  const userCookie = cookies.get('user')
  const tokenStr = userCookie.token
  dispatch(received(SAVE_LICENCE_REQUEST))
  const { user, dueDate, isActive } = params
  const axiosData = {
    method: 'POST',
    url: 'http://localhost:3001/v1/licences/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    },
    data: {
      user,
      dueDate,
      isActive
    }
  }
  return axios(axiosData)
    .then(response => dispatch(received(SAVE_LICENCE_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(SAVE_LICENCE_ERROR))
    })
}

export const fetchLicences = () => dispatch => {
  const userInfo = cookies.get('user')
  const tokenStr = userInfo.token
  dispatch(request(FETCH_LICENCES_REQUEST))
  const axiosData = {
    method: 'GET',
    url: 'http://localhost:3001/v1/licences',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    }
  }

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_LICENCES_SUCCESS, response.data))).then(()=>{
      //requestData()
    })
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_LICENCES_ERROR))
    })
}

export const fetchLicence = (params) => dispatch => {
  const userInfo = cookies.get('user')
  const tokenStr = userInfo.token
  const {id} = params
  dispatch(request(FETCH_LICENCE_REQUEST))
  const axiosData = {
    method: 'GET',
    url: `http://localhost:3001/v1/licences/${id}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${tokenStr}`
    }
  }

  return axios(axiosData)
    .then(response => dispatch(received(FETCH_LICENCE_SUCCESS, response.data)))
    .catch(err => {
      console.log('AXIOS ERROR:', err.response) // eslint-disable-line no-console
      dispatch(error(FETCH_LICENCES_ERROR))
    })
}
