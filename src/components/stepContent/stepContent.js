import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './stepContent.module.scss'
import StepContentItem from './stepContentItem/stepContentItem'




class stepContent extends Component {

    render() {
      let {stepArr} = this.props;

      const classesMainContentAr = [];
      classesMainContentAr.push(classes.mainItem);
      classesMainContentAr.push(classes.rowItem)
      const classesMainContentItem = [];
      
      classesMainContentItem.push('col-2');

      let stepArrDOM = stepArr.map(item => { 
        return (
          <StepContentItem key={'item_' + Math.random()} prop_item={item} className={classesMainContentItem.join(" ")}></StepContentItem>
        )});
        return (
          <div className={classesMainContentAr.join(" ")}>
            {stepArrDOM}
          </div>
        )        
    }
}

function mapStateToProps(state) {
    return {
      stepArr: state.content.stepArr
    }
  }
  
  function mapDispatchToProps(dispatch) {
    
  }


export default stepContent
