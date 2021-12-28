import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContentItem from './contentItem/contentItem'
import classes from './content.module.scss'

class content extends Component {

 
    render() {
      let {contentArr} = this.props;

      const classesMainContentAr = [];
      classesMainContentAr.push('container');
      classesMainContentAr.push(classes.mainItem);
      const classesMainContentItem = [];
      classesMainContentItem.push(classes.rowItem)
      classesMainContentItem.push('center-block')
      classesMainContentItem.push('col-md-4')

      contentArr = contentArr.map(contentItemArr => 
        {
          return (
            <div className={classesMainContentItem.join(" ")} key={Math.random()}>
              {
                contentItemArr.map(contentItem => {
                  return (
                    <ContentItem key={'item_' + Math.random()} item={contentItem} arr={contentArr}></ContentItem>
                  )})} 
            </div>)
        });  
      
        return (
          <div className={classesMainContentAr.join(" ")}>
            {contentArr}
          </div>)
    }
}

function mapStateToProps(state) {
    return {
      contentArr: state.content.contentArr
    }
  }
  
  function mapDispatchToProps(dispatch) {

  }


export default content
