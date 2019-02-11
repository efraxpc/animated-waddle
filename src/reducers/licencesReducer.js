import {
  SAVE_LICENCE_REQUEST,
  SAVE_LICENCE_SUCCESS,
  SAVE_LICENCE_ERROR,
  FETCH_LICENCES_REQUEST,
  FETCH_LICENCES_SUCCESS,
  REQUEST_SHOW_MODAL,
  FETCH_LICENCE_REQUEST,
  FETCH_LICENCE_SUCCESS,
  UPDATE_LICENCE_REQUEST,
  UPDATE_LICENCE_SUCCESS,
  UPDATE_LICENCE_ERROR,
  REMOVE_LICENCE_REQUEST,
  REMOVE_LICENCE_SUCCESS,
  REMOVE_LICENCE_ERROR
} from '../actions/actionTypes'

import { getNewState } from '../shared/utils/frontend'

const initialState = {
  licences: [],
  licence: {},
  licenceRemoved: false,
  licenceUpdated: false,
  licenceSaved: false
}

export default function licencesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SHOW_MODAL: {
      return getNewState(state, {
        licence: {},
        licenceRemoved: false,
        licenceUpdated: false,
        licenceSaved: false
      })
    }
    case SAVE_LICENCE_REQUEST: {
      return state
    }
    case SAVE_LICENCE_SUCCESS: {
      return getNewState(state, {
        licenceSaved:true
      })
    }
    case FETCH_LICENCES_REQUEST: {
      return state
    }
    case FETCH_LICENCES_SUCCESS: {
      const { payload: licences } = action
      return getNewState(state, {
        licences
      })
    }
    case FETCH_LICENCE_REQUEST: {
      return state
    }
    case FETCH_LICENCE_SUCCESS: {
      const { payload: licence } = action
      return getNewState(state, {
        licence
      })
    }
    case UPDATE_LICENCE_REQUEST: {
      return state
    }
    case UPDATE_LICENCE_SUCCESS: {
      const { payload: licence } = action
      return getNewState(state, {
        licence,
        licenceUpdated: true
      })
    }
    case REMOVE_LICENCE_SUCCESS: {
      const { payload: licence } = action
      return getNewState(state, {
        licenceRemoved: licence.success
      })
    }
    case REMOVE_LICENCE_ERROR: {
      return state
    }

    default:
      return state
  }
}
