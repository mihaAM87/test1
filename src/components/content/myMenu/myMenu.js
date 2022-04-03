import React, {Component} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
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

        navClass.push(classes.redBackground);

        if (sportTypesArr && sportTypesArr.contents && sportTypesArr.contents.length > 0) {
            sportTypesArr = sportTypesArr.contents.map(element => 
                {
                    return (
                        <NavDropdown.Item href="#">{element.name}</NavDropdown.Item>
                    )
                });
        }

        return (

            <Navbar bg="light" expand="lg" variant="dark">
                <Container className={navClass.join(' ')}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Виды спорта" id="basic-nav-dropdown">
                            {sportTypesArr}
                        </NavDropdown>
                        <Nav.Link href="#">Стоимость</Nav.Link>
                        <Nav.Link href="#">Тренеры</Nav.Link>
                        <Nav.Link href="#">Контакты</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
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