import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './body.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY} from '../../../store/actions/content'
import {fetchAllContentByType} from '../../../store/actions/contentSrc'
import Radium from 'radium'

class body extends Component {

    static contextTypes = {

    }

    state = {
      
    }

    componentWillMount() {
        
    }

     render() {

        
                    
                    
               

         return (
            
         )
     }
}
function mapStateToProps(state) {
    return {
        
      }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(body)