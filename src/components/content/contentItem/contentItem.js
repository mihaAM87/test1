import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './contentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import {WIN} from '../../../store/actions/actionTypes';
import {check, getMainItemSrc} from '../../../store/actions/content';


class contentItem extends Component {

     render() {
        let {item, arr} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push(classes.divItem);
        const classesMainContentItem = [];
        classesMainContentItem.push(classes.stepImg);

        let imgSrc = item?.src;

        return (
          <div className={classesMainContentAr.join(" ")} onClick={this.props.checkClick.bind(this, arr, item)}>
            {imgSrc ?
              (<img className={classesMainContentItem.join(" ")} 
              src={imgSrc}
              />)
              : ""
            }
            
          </div>)
    }
}

function mapStateToProps(state) {
  return {
    
  }
}
  
  function mapDispatchToProps(dispatch) {
    return {
      checkClick: (arr, item) => dispatch(check(arr, item)),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(contentItem)