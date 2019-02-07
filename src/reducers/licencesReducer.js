import {
  SAVE_LICENCE_REQUEST,
  SAVE_LICENCE_SUCCESS,
  SAVE_LICENCE_ERROR,
  FETCH_LICENCES_REQUEST,
  FETCH_LICENCES_SUCCESS
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'

const initialState = {
  licences: [],
  licence : {}
}

export default function licencesReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_LICENCE_REQUEST: {
      return state
    }
    case SAVE_LICENCE_SUCCESS: {
      const { payload: licence } = action
      return getNewState(state, {
        licence
      })
    }
    case FETCH_LICENCES_REQUEST: {
      return state
    }
    case FETCH_LICENCES_SUCCESS: {
      const { payload: licences } = action
      return getNewState(state, {
        licences: licences
      })
    }
    default:
      return state
  }
}
