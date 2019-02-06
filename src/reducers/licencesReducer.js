import {
    SAVE_LICENCE_REQUEST,
    SAVE_LICENCE_SUCCESS,
    SAVE_LICENCE_ERROR
  } from '../actions/actionTypes'
  
  import { getNewState } from '../shared/utils/frontend'
  
  const initialState = {
    licence: {},
  }
  
  export default function licencesReducer(state = initialState, action) {
    switch (action.type) {
      case SAVE_LICENCE_REQUEST: { 
          console.log(state);
        return state
      }
      case SAVE_LICENCE_SUCCESS: {
        const { payload: licence } = action
        console.log(licence);
        return getNewState(state, {
            licence
        })
      }
      default:
        return state
    }
  }
  