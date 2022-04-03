import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classes from './mainContent.module.scss'
import Header from './content/header/header'
import MyMenu from './content/myMenu/myMenu'
import MainImage from './content/mainImage/mainImage'
import Footer from './content/footer/footer'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

class mainContent extends Component {

  state = {
  }


    render() {
      
        return (
          <div className='row'>
            <Header />
            <MyMenu />
            <MainImage />
            <Footer />
          </div>
          
        );
    }
}



export default mainContent
