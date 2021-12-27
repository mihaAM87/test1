import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StepContent from './stepContent/stepContent'
import classes from './gameContent.module.scss'
import Content from './content/content'
import {initGame} from '../store/actions/content';

class gameContent extends Component {

  state = {
    contentArr: [],
    stepArr: []
  }

    componentDidMount() {
      this.props.initGame(this.state.contentArr, this.state.stepArr);
    }

    render() {
      let {contentArr, stepArr} = this.props;

      const classesMainContentAr = [];
      
      const classesMainContentItem = [];
      classesMainContentItem.push(classes.item)
        return (
          <div>
            <Content contentArr={contentArr} />
            <StepContent stepArr={stepArr} />
            
          </div>
          
        )
    }
}

function mapStateToProps(state) {
    return {
      contentArr: state.content.contentArr,
      stepArr: state.content.stepArr,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      initGame: (contentArr, stepArr) => dispatch(initGame(contentArr, stepArr))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(gameContent)
