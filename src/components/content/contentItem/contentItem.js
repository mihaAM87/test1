import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './contentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import {WIN} from '../../../store/actions/actionTypes';
import {check, getMainItemSrc} from '../../../store/actions/content';


class contentItem extends Component {

     render() {
        let {item, isClick} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push(classes.divItem);
        const classesMainContentItem = [];
        classesMainContentItem.push(classes.stepImg);
        console.log("item", item)
        console.log("item?.isStart", item?.isStart)
        return (
          <div className={classesMainContentAr.join(" ")} onClick={this.props.check.bind(item), isClick = true}>
            <img className={classesMainContentItem.join(" ")} 
              src={this.props.getMainItemSrc.bind(item, isClick)}
              />
          </div>)
    }
}

function mapStateToProps(state) {

  }
  
  function mapDispatchToProps(dispatch) {
    return {
      check: (item) => dispatch(check(item)),
      getMainItemSrc: (item, isClick) => dispatch(getMainItemSrc(item, isClick))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Radium(contentItem))