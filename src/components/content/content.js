import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ContentItem from './contentItem/contentItem'
import classes from './content.module.scss'

class content extends Component {

    componentDidMount() {
      
    }

    render() {
      let {contentArr} = this.props;

      contentArr = contentArr.map(itemArr => { 
        return (
        <div>
          {itemArr.map(item => {
          return (<ContentItem item={item}></ContentItem>)})}
        </div>)
      });
        return (
          <div>
            contentArr
          </div>
        )
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
