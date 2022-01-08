import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './stepContent.module.scss'
import StepContentItem from './stepContentItem/stepContentItem'
import {STEP_ROW_LENGTH} from '../../store/actions/actionTypes';



class stepContent extends Component {

  static contextTypes = {
    stepArr: PropTypes.array
  }

    render() {
      let {stepArr} = this.props;

      const classesMainContentAr = [];
      classesMainContentAr.push(classes.mainItem);
      const classesMainContentItem = [];
      const classesMainContentItemRow = [];
      classesMainContentItemRow.push(classes.rowItem)
      
      classesMainContentItem.push('col-2');

      let stepArrDOM = stepArr.map(item => { 
        return (
          <StepContentItem key={'item_' + Math.random()} prop_item={item} className={classesMainContentItem.join(" ")}></StepContentItem>
        )});

      let stepArrDOMNew = [];

      while (stepArrDOM.length > 0) {
        stepArrDOMNew.push((<div className={classesMainContentItemRow.join(" ")} key={'item_row_' + Math.random()}>{stepArrDOM.splice(0, STEP_ROW_LENGTH)}</div>));
      }

        return (
          <div className={classesMainContentAr.join(" ")}>
            {stepArrDOMNew}
          </div>
        )        
    }
}

function mapStateToProps(state) {
    return {
      stepArr: state.content.stepArr
    }
  }
  
  


export default stepContent
