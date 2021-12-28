import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StepContent from './stepContent/stepContent'
import classes from './gameContent.module.scss'
import Content from './content/content'
import {initGame, reStart} from '../store/actions/content';

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
      classesMainContentAr.push('container')
      const classesMainContentItem = [];
      classesMainContentItem.push(classes.item)
      const classesBtn = []
      classesBtn.push('btn btn-primary')
      const classeControl = []
      classeControl.push('form-control')
        return (
          <form className={classesMainContentAr.join(" ")}>
            <Content contentArr={contentArr} className={classesMainContentItem.join(" ")}/>
            <StepContent stepArr={stepArr} className={classesMainContentItem.join(" ")}/>
            <div className={classeControl.join(" ")}>
              <button className={classesBtn.join(" ")} onClick={this.props.reStart.bind(contentArr, stepArr)}>Запуск</button>
            </div>
          </form>
          
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
      initGame: (contentArr, stepArr) => dispatch(initGame(contentArr, stepArr)),
      reStart: (contentArr, stepArr) => dispatch(reStart(contentArr, stepArr))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(gameContent)
