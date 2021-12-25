import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './stepContent.module.scss'
import StepContentItem from './stepContentItem/stepContentItem'




class stepContent extends Component {

    render() {
      let {stepArr} = this.props;

      stepArr = stepArr.map(item => { 
        return (
          <StepContentItem item={item}></StepContentItem>
        )});
        return (
          <div>
            stepArr
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
