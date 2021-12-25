import {LEFT, RIGTH, UP, DOWN} from '../actions/actionTypes';
import {OrderedMap, Record} from 'immutable'

const ReducerState = Record({
  stepDirection: {LEFT: '/img/left.png', RIGTH: '/img/right.png', UP: '/img/up.png', DOWN: '/img/down.png'}
})

const defaultState = new ReducerState()

const initialState = {
  contentArr: [],
  stepArr: []
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + START:
      return {
        ...state, loading: true
      }
    case LOAD_ALL_CONTENTS + SUCCESS:
      return {
        ...state, loading: false, contentArr: action.contentArr, track: action.track
      }
    case LOAD_ALL_CONTENTS + ERROR:
      return {
        ...state, loading: false, error: action.error
      }
    default:
        return state
    }
}