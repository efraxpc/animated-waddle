import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_LOGIN_SUCCESS,
  REQUEST_LOGIN_USER,
  FETCH_LOGIN_ERROR,
  REQUEST_RESET_LOGIN_ERRORS
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'
const omitDeep = require('omit-deep-lodash')

const initialState = {
  users: [],
  user: {},
  loginError: false,
  errorMsg: ''
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return state
    }
    case FETCH_USERS_SUCCESS: {
      const { payload: users } = action
      return getNewState(state, {
        users
      })
    }
    case FETCH_LOGIN_SUCCESS: {
      const { payload: user } = action
      return getNewState(state, {
        user,
        loginError: false,
        errorMsg: ''
      })
    }
    case REQUEST_LOGIN_USER: {
      return omitDeep(state, ['user'])
    }
    case FETCH_LOGIN_ERROR: {
      return getNewState(state, {
        loginError: true,
        errorMsg: 'Usuario o contraseña inválidos'
      })
    }
    case REQUEST_RESET_LOGIN_ERRORS:{
      return getNewState(state, {
        loginError: false,
        errorMsg: ''
      })
    }
    default:
      return state
  }
}
