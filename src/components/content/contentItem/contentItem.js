import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './contentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import {WIN} from '../../../store/actions/actionTypes';
import {check} from '../../../store/actions/content';


class contentItem extends Component {

     render() {
        let {item} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push(classes.divItem);
        const classesMainContentItem = [];
        classesMainContentItem.push(classes.stepImg);
        console.log("item", item)
        console.log("item?.isStart", item?.isStart)
        return (
          <div className={classesMainContentAr.join(" ")} onClick={this.props.check.bind(item)}>
            <img className={classesMainContentItem.join(" ")} 
              src={item?.isStart ? "../../../img/constr4.gif" : 
              (item?.isTarget ? (item?.type ? (item?.type === WIN ? "../../../img/yes.jgp" : (checkedItem.type === FAIL ? "../../../img/no.png" : "../../../img/fail.png") : )}
              />
          </div>)
    }
}

function mapStateToProps(state) {

  }
  
  function mapDispatchToProps(dispatch) {
    return {
      check: (item) => dispatch(check(item))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Radium(contentItem))