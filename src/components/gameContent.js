import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StepContent from './stepContent/stepContent'
import classes from './gameContent.scss'
import Content from './stepContent/content'

class gameContent extends Component {

    componentDidMount() {
      this.props.initGame(this.state.contentArr, this.state.stepArr);
    }

    render() {
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
