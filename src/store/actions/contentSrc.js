import {LOAD_ALL_CONTENTS, SPORT_TYPES, COACHES, PRICES, START, ERROR} from './content';
import axios from 'axios'

import source from '../source/source.json';

export function fetchContentStart(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + START,
    contentArr
  }
}

export function fetchContentError(e) {
  return {
    type: LOAD_ALL_CONTENTS + ERROR,
    error: e
  }
}

export function getSportTypeContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + SPORT_TYPES,
    contentArr
  }
}

export function getCoachesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + COACHES,
    contentArr
  }
}

export function getPricesContent(contentArr) {
  return {
    type: LOAD_ALL_CONTENTS + PRICES,
    contentArr
  }
}

export function fetchAllContentByType(type, contentArr) {
  return async dispatch => {

    dispatch(fetchContentStart());

    try {

      contentArr = source;
      
      contentArr = contentArr.find(item => item.type === type);
      dispatch(getSportTypeContent(contentArr));

    } catch (e) {
      dispatch(fetchContentError(e));
    }
  }
}
