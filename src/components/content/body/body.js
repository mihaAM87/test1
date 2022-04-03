import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './body.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY} from '../../../store/actions/content'
import {fetchAllContentByType} from '../../../store/actions/contentSrc'
import SportTypes from './pages/sportTypes/sportTypes'
import Coaches from './pages/coaches/coaches'
import GroupTypes from './pages/groupTypes/groupTypes'
import Prices from './pages/prices/prices'
import Contacts from './pages/contacts/contacts'
import Home from './pages/home/home'
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

          <Layout>
            <Switch>
              <Route path="/sportTypes" component={SportTypes} />
              <Route path="/coaches" component={Coaches} />
              <Route path="/groupTypes" component={GroupTypes} />
              <Route path="/prices" component={Prices} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/" component={Home} />

            </Switch>
          </Layout>
            
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