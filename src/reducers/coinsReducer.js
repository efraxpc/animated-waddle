import {
  FETCH_COINS_SUCCESS,
  FETCH_LOGIN_SUCCESS,
  LAUNCH_LOGIN_USER,
  FETCH_USER,
  OPEN_MODAL
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'

const omitDeep = require('omit-deep-lodash')

const initialState = {
  coins: [],
  user: [],
}

export default function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COINS_SUCCESS: {
      const { payload: coins } = action

      return getNewState(state, {
        coins
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
