import {OrderedMap, Record} from 'immutable'
import {LOAD_ALL_CONTENTS, SUCCESS, CHECK} from '../actions/actionTypes';

const initialState = {
  contentArr: [],
  item: {},
  stepArr: []
}

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL_CONTENTS + SUCCESS:
      return {
        ...state, contentArr: action.contentArr, stepArr: action.stepArr
      }
    case LOAD_ALL_CONTENTS + CHECK:
      return {
        ...state, contentArr: action.contentArr, item: action.item
      }
    default:
        return state
    }
}