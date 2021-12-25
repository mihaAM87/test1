import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './folgerContentItem.module.scss'
import {fetchContentById} from '../../../store/actions/content'
import { connect } from 'react-redux'
import Radium from 'radium'


class contentItem extends Component {


    render() {
        let {item} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push("divItem");
        const classesMainContentItem = []

        return (
          (<div className={classesMainContentAr.join(" ")}>
          <img className={classesMainContentItem.join(" ")} click={check.dispatch(item)}
          src={item.iStart ? "/img/constr4.gif" : (item.isTarget ? (item.type ? (item.type === WIN ? "/img/yes.jgp" : "/img/no.png") : "") : "/img/fail.png")} />
        </div>)
        )
    }
}

function mapStateToProps(state) {
    return {
      item: state.content.item
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      check: (item) => dispatch(check(item))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Radium(contentItem))