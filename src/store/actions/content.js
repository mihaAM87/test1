import {WIN, FAIL, CONTENT_X_LENGTH, CONTENT_Y_LENGTH, STEP_LENGTH, 
  STEP_DIRECTION_LEFT, STEP_DIRECTION_RIGHT, STEP_DIRECTION_UP, STEP_DIRECTION_DOWN, 
  INTERVAL_TIME, LOAD_ALL_CONTENTS, SUCCESS, CHECK} from './actionTypes';

export function fetchContentSuccess(contentArr, stepArr) {
  return {
    type: LOAD_ALL_CONTENTS + SUCCESS,
    contentArr,
    stepArr
  }
}

export function fetchContentCheck(contentArr, item) {
  return {
    type: LOAD_ALL_CONTENTS + CHECK,
    contentArr,
    item
  }
}

export function initGame(contentArr, stepArr) {
  return async dispatch => {
    try {

      if ((!contentArr || contentArr.length == 0) || (!stepArr || stepArr.length == 0)) {
        contentArr = initContentArr(CONTENT_X_LENGTH, CONTENT_Y_LENGTH);
        stepArr = initStepArr(STEP_LENGTH);

        initStepArrTask(contentArr, stepArr);
      }
      
      initContentArrSrc(contentArr);

      dispatch(fetchContentSuccess(contentArr, stepArr));

    } catch (e) {
      //dispatch(fetchContentError(e));
    }
  }
}

export async function reStart(contentArr, stepArr) {
  contentArr = [];
  stepArr = [];

  initGame(contentArr, stepArr)
}

export function check(contentArr, item) {
  return async dispatch => {
    try {

      if (contentArr && contentArr.length > 0 && item) {
        
        contentArr.isClick = true;
        item.isClick = contentArr.isClick;
        getWin(item);

        initContentArrSrc(contentArr);
  
        dispatch(fetchContentCheck(contentArr, item));
      }
    } catch (e) {
      //dispatch(fetchContentError(e));
    }
  }
}

function getWin(checkedItem) {

  if (checkedItem.isTarget) {
    checkedItem.type = WIN;
  } else {
    checkedItem.type = FAIL;
  }
}

function getMainItemSrc(item, isClick) {
  item.src = "";
     
  if (item?.isStart) {

    item.src = "../../../img/constr4.gif"

  } 
  
  if (isClick) {

    if (item?.isTarget) {

      if (item?.type === WIN) {
        item.src = "../../../img/yes.jpg";
      } else {
        item.src = "../../../img/fail.png"
      }

    } else if (item?.isClick) {

      item.src = "../../../img/no.png"

    } 
    console.log("fail", item.src)
  }

}

function initContentArr(contentXLength, contentYLength) {
  
  let arr = Array(contentYLength)

  for (let i = 0; i < arr.length; ++i) {
    arr[i] = Array(contentXLength)

    arr[i] = initArr(arr[i]);
  }

  arr.isClick = false;

  return arr;
}

function initContentArrSrc(contentArr) {
  contentArr.forEach(itemArr => {
    itemArr.forEach(item => {
      getMainItemSrc(item, contentArr.isClick)
    })
  }); 
}

function initStepArr(stepLength) {

  let arr = Array(stepLength);

  arr = initArr(arr);

  return arr;
}

function initArr(arr) {
  for (let i = 0; i < arr.length; ++i) {
    arr[i] = {}
  }

  return arr;
}

function initStepArrTask(contentArr, stepApp) {
  let count = 0;

  getNextStep(contentArr, stepApp, -1);

  for (let i = 0; i < stepApp.length; ++i) {

    getNextStep(contentArr, stepApp, i);
    
  }
  
  
  //let interval = window.interval(function (count) {
    //if (!(++count < stepApp.length)) {
      //window.clearInterval(interval);
    //}
  //}, INTERVAL_TIME)
}

function getNextStep(arrContent, arrStep, count) {

  // if (!arrContent || !(arrContent.length > 0)) {
  //   return;
  // }

  if (count >= 0) {
    for (let y = 0; y < arrContent.length; ++y) {
      let y_arr = arrContent[y];
      
      let x = y_arr.indexOf(y_arr.find(item => item.isTemp));
      if (x >= 0) {

        y_arr[x].isTemp = false;     
        
        let step = getRandomItem(arrContent, {x, y});
  
        arrStep[count].src = getStepDirectionSrc(step)
  
        if (typeof x !== 'number' || typeof y !== 'number') {
          x = 0;
          y = 0;
        }
  
        let nextItem = arrContent[y += step.stepY][x += step.stepX];
  
        nextItem.isTemp = true; 
  
        if (count == arrStep.length - 1) {
          nextItem.isTarget = true;
        }
        
        return;
      }
    }
  }

  let step = getRandomItem(arrContent);
  let nextItem = arrContent[step.stepY][step.stepX];

  nextItem.isStart = true;
  nextItem.isTemp = true;  

  if (count == arrStep.length - 1) {
    nextItem.isTarget = true;
  }
  
  return;
}

function getRandomItem(arr, item) {
  let stepX = 0; 
  let stepY = 0;

  if (arr[0].length > 1) {

    if (!item || typeof item.x !== 'number' || typeof item.y !== 'number') {
      stepX = getRandomInRange(0, arr[0].length - 1);
    } else {
      stepX = getRandomInRange(-1, 1);
      if ((item.x == 0 && stepX < 0) || (item.x == (arr[0].length - 1) && stepX > 0)) {
        stepX = -stepX;
      } 
    }
  } 

  if (arr.length > 1) {
    if (!item || typeof item.x !== 'number' || typeof item.y !== 'number') {
      stepY = getRandomInRange(0, arr.length - 1);
    } else {
      if (stepX == 0) {
        stepY = getRandomInRange(0, 1) == 0 ? -1 : 1
        if ((item.y == 0 && stepY < 0) || (item.y == (arr.length - 1) && stepY > 0)) {
          stepY = -stepY;
        } 
      } 
    }
  } 
  
  return {stepX, stepY}
}




function getStepDirectionSrc(step) {
  if (step && typeof step.stepX === 'number' && typeof step.stepY === 'number') {
    if (step.stepX != 0) {
      switch (step.stepX) {
        case -1:
          return STEP_DIRECTION_LEFT;
        case 1:
          return STEP_DIRECTION_RIGHT;
      }
    } else if (step.stepY != 0) {
      switch (step.stepY) {
        case -1: 
          return STEP_DIRECTION_UP;
        case 1:
          return STEP_DIRECTION_DOWN;
      }
    }

  }
}


function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


