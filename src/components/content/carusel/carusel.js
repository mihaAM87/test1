import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './carusel.module.scss'
import { connect } from 'react-redux'
import {IMG_DIRECTORY} from '../../../store/actions/content'
import {fetchAllContentByType} from '../../../store/actions/contentSrc'
import Radium from 'radium'

class carusel extends Component {

    static contextTypes = {
        type: PropTypes.string,
        groupTypesArr: PropTypes.array
    }

    state = {
        groupTypesArr: []
    }

    componentWillMount() {
        this.props.groupTypesInit("groupTypes", this.state.groupTypesArr);
    }

     render() {

        let {groupTypesArr} = this.props;
        groupTypesArr = groupTypesArr || [];
        let groupTypesButtonsArr = [];
        if (groupTypesArr && groupTypesArr.contents && groupTypesArr.contents.length > 0) {

            groupTypesArr.contents.forEach((item, index, array) => {


                let itemClasses = [];

                if (item.name.toLowerCase() === 'женщины') {
                    itemClasses.push('active');
                }

                let itemKey = Math.random();
                groupTypesButtonsArr.push(() => { return (
                    
                        <button key={itemKey} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} 
                        className={itemClasses.join(' ')} aria-current="true" aria-label={'Slide ' + (index + 1)}></button>
                    
                    )
                });
            });


            groupTypesArr = groupTypesArr.contents.map(element => 
                {
                    let itemClasses = [];
                    itemClasses.push('carousel-item');

                    if (element.name.toLowerCase() === 'женщины') {
                        itemClasses.push('active');
                    }

                    let itemKey = Math.random();
                    
                    return (

                        <div key={itemKey} className={itemClasses.join(' ')} >
                            <img src={IMG_DIRECTORY + element.contents.img} className="d-block w-100" 
                            alt={element.contents.header} />
                        </div>
                    )
                });

                
                
        }

         return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {groupTypesButtonsArr}
                </div>
                <div className="carousel-inner">
                    {groupTypesArr}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
         )
     }
}
function mapStateToProps(state) {
    return {
        groupTypesArr: state.content.groupTypesArr,
        loading: state.content.loading
      }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        groupTypesInit: (type, groupTypesArr) => dispatch(fetchAllContentByType(type, groupTypesArr))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(carusel)

