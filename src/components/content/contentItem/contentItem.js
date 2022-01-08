import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './contentItem.module.scss'
import { connect } from 'react-redux'
import Radium from 'radium'

class contentItem extends Component {

    static contextTypes = {
      item: PropTypes.object,
      arr: PropTypes.array
    }

     render() {
        let {item, arr} = this.props;

        const classesMainContentAr = [];
        classesMainContentAr.push(classes.divItem);
        const classesMainContentItem = [];
        classesMainContentItem.push(classes.contentImg);

        let imgSrc = item?.src;

        return (
            <div key={'item_div_' + Math.random()} className={classesMainContentAr.join(" ")} onClick={() => {
              if (!arr.isClick) {
                this.props.onCheckClick(arr, item);
              }
            }
            }>
              {imgSrc ?
                (<img className={classesMainContentItem.join(" ")} key={'item_img_' + Math.random()}
                src={imgSrc}
                />)
                : ""
              }
            
            </div>
          )
    }
}




export default contentItem