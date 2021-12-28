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

        let imgSrc = prop_item?.src;

        return (
          (<div className={classesMainContentAr.join(" ")}>
            {imgSrc ?
              <img className={classesMainContentItem.join(" ")} 
              src={imgSrc} /> 
              : ""
            }
          </div>)
        )
    }
}

function mapStateToProps(state) {

  }
  
  function mapDispatchToProps(dispatch) {

  }


export default stepContentItem