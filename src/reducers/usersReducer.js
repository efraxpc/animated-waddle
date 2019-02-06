import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_LOGIN_SUCCESS,
  LAUNCH_LOGIN_USER
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'
const omitDeep = require('omit-deep-lodash')

const initialState = {
  users: [],
  user: {}
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
        user
      })
    }
    case LAUNCH_LOGIN_USER: {
      return omitDeep(state, ['user'])
    }
    default:
      return state
  }
}
