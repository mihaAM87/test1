import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './myMenu.module.scss'
import { connect } from 'react-redux'
import {fetchAllContentByType} from '../../../store/actions/contentSrc'
import Radium from 'radium'

class myMenu extends Component {

    static contextTypes = {
        type: PropTypes.string,
        sportTypesArr: PropTypes.array
    }

    state = {
        sportTypesArr: []
    }

    componentWillMount() {
        this.props.sportTypesInit("sportTypes", this.state.sportTypesArr);
    }

     render() {

        let {sportTypesArr} = this.props;
        sportTypesArr = sportTypesArr || [];

        const navClass = [];

        navClass.push("navbar");
        navClass.push("navbar-expand-lg");
        navClass.push("navbar-light");
        // navClass.push(classes.whiteColor);
        navClass.push(classes.redBackground);

        if (sportTypesArr && sportTypesArr.contents && sportTypesArr.contents.length > 0) {
            sportTypesArr = sportTypesArr.contents.map(element => 
                {
                    return (
                        <li><a className="dropdown-item" href="#">{element.name}</a></li>
                    )
                });
        }

        return (
            <div className='row'>
                <nav className={navClass.join(' ')}>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown col-md-4">
                                    <a className="nav-link dropdown-toggle active text-white" href="#" 
                                    id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                                    aria-expanded="false" >Виды спорта</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {sportTypesArr}
                                    </ul>
                                </li>
                                <li className="nav-item col-md-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Стоимость</a>
                                </li>
                                <li className="nav-item col-md-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Тренеры</a>
                                </li>
                                <li className="nav-item col-md-4">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Контакты</a>
                                </li>
                            </ul>
                            
                        </div>
                        
                    </div>
                
                </nav>
            </div>
            
            
          )
    }



}

function mapStateToProps(state) {
    return {
        sportTypesArr: state.content.sportTypesArr,
        loading: state.content.loading
      }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        sportTypesInit: (type, sportTypesArr) => dispatch(fetchAllContentByType(type, sportTypesArr))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(myMenu)