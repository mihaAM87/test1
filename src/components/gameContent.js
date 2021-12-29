import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StepContent from './stepContent/stepContent'
import classes from './gameContent.module.scss'
import Content from './content/content'
import {initGame, reStart, check} from '../store/actions/content';

class gameContent extends Component {

  state = {
    contentArr: [],
    stepArr: []
  }

    componentDidMount() {
      this.props.initGame(this.props.contentArr, this.props.stepArr);
    }

    render() {
      let {contentArr, stepArr} = this.props;

      const classesMainContentAr = [];
      classesMainContentAr.push('container')
      const classesMainContentItem = [];
      classesMainContentItem.push(classes.item)
      const classesBtn = []
      classesBtn.push('btn btn-primary')
      const classesControl = []
      classesControl.push('form-control')
        return (
          <form className={classesMainContentAr.join(" ")} onClick={() => this.forceUpdate()}>
            <Content contentArr={contentArr} className={classesMainContentItem.join(" ")} onCheckClick={this.props.checkClick}/>
            <StepContent stepArr={stepArr} className={classesMainContentItem.join(" ")}/>
            
            <div className={classesControl.join(" ")}>
              <p>Игрок должен в уме «пройти» 10 ходов от текущей точки маркера по лабиринту и указать конечную точку маркера</p>
              <button className={classesBtn.join(" ")} onClick={this.props.reStart.bind(contentArr, stepArr)} disabled={!contentArr.isClick}>Перезапуск</button>
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
      checkClick: (arr, item) => dispatch(check(arr, item)),
      reStart: (contentArr, stepArr) => dispatch(reStart(contentArr, stepArr))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(gameContent)
