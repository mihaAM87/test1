import {WIN, FAIL} from '../actions/actionTypes';



export function initGame(contentXLength, contentYLength, stepLength) {
  return async dispatch => {
    try {

      let contentArr = initContentArr(contentXLength, contentYLength);
      let stepApp = initStepArr(stepLength);
      initStepArrTask(contentArr, stepApp);

    } catch (e) {
      dispatch(fetchContentError(e));
    }
  }
}

function initContentArr(contentXLength, contentYLength) {
  
  let arr = Array(contentXLength)

  for (let item_y in arr) {
    item_y = Array(contentYLength)
  }

  return arr;
}

function initStepArr(stepLength) {

  let arr = Array(stepLength);

  return arr;
}

function initStepArrTask(contentArr, stepApp) {
  for (let count = 0; count < stepApp.length; ++count) {
    getNextStep(contentArr, stepApp, count)
  }
}

function getRandomItem(arr, item) {
  let stepX = 0; 
  let stepY = 0; 

  if (y_length > 1) {
    stepX = getRandomInRange(-1, 0, 1);
    if ((item.x == 0 && stepX < 0) || (item.x == (arr[0].length - 1) && stepX > 0)) {
      stepX = -stepX;
    } 
  } 

  if (x_length > 1) {
    if (stepX == 0) {
      stepY = getRandomInRange(0, 1) == 0 ? -1 : 1
      if ((item.y == 0 && stepY < 0) || (item.y == (arr.length - 1) && stepY > 0)) {
        stepY = -stepY;
      } 
    }
  }
  
  return {stepX, stepY}
}


function getNextStep(arrContent, arrStep, count) {
  for (let y = 0; y < arrContent.length; ++y) {
    let y_arr = arr[y];
    let x = y_arr.indexOf(item => item.temp)
    if (x >= 0) {

      y_arr[x].isTemp = false;     
      
      let step = getRandomItem(arrContent, {x, y});

      arrStep[count].src = getStepDirectionSrc(step)

      let nextItem = arrContent[y += step.stepY][x += step.stepX];

      nextItem.isTemp = true;

      return getWin(nextItem, {count, countEnd: arrStep.length - 1})    
    }
  }
  
  return false;
}

function getStepDirectionSrc(step) {
  if (step && step.x && step.y) {
    if (step.x != 0) {
      switch (step.x) {
        case -1:
          return STEP_DIRECTION.LEFT;
        case 1:
          return STEP_DIRECTION.RIGHT;
      }
    } else if (step.y != 0) {
      switch (step.y) {
        case -1:
          return STEP_DIRECTION.DOWN;
        case 1:
          return STEP_DIRECTION.UP;
      }
    }

  }
}

function getWin(nextItem, content) {

  if (content.count == content.countEnd) {

    if (nextItem.isTarget) {
      nextItem.type = WIN;
    } else {
      nextItem.type = FAIL;
    }
    
  }

  return nextItem.type === WIN;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
