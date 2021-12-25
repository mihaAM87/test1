import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './stepContentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'


class stepContentItem extends Component {


    render() {
        let {item} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push("divItem");
        const classesMainContentItem = []

        return (
          (<div className={classesMainContentAr.join(" ")}>
          <img className={classesMainContentItem.join(" ")} 
          src={item.iStart ? "/img/constr4.gif" : (item.isTarget ? (item.type ? (item.type === WIN ? "/img/yes.jgp" : "/img/no.png") : "") : "/img/fail.png")} />
        </div>)
        )
    }
}

function mapStateToProps(state) {

  }
  
  function mapDispatchToProps(dispatch) {

  }


export default stepContentItem