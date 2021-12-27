import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './stepContentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'


class stepContentItem extends Component {


    render() {
        let {prop_item} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push(classes.divMain);
        const classesMainContentItem = [];
        classesMainContentItem.push(classes.stepImg)
        console.log('img src', prop_item?.src)
        return (
          (<div className={classesMainContentAr.join(" ")}>
            <img className={classesMainContentItem.join(" ")} 
            src={prop_item?.src} />
          </div>)
        )
    }
}

function mapStateToProps(state) {

  }
  
  function mapDispatchToProps(dispatch) {

  }


export default stepContentItem