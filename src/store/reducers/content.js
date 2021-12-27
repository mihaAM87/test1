import {OrderedMap, Record} from 'immutable'
import {LOAD_ALL_CONTENTS, SUCCESS} from '../actions/actionTypes';

const initialState = {
  contentArr: [],
  stepArr: []
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + SUCCESS:
      return {
        ...state, contentArr: action.contentArr, stepArr: action.stepArr
      }
    default:
        return state
    }
}