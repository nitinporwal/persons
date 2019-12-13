import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import Radium from 'radium';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClasses'

class Person extends Component {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    componentDidMount() {
        this.inputElement.focus();
    }
    render () {
        console.log('[Person.js] rendering.....');
        return (
            // <div className={classes.Person}>
            // <React.Fragment>
            <Aux>
                <p onClick={this.props.click} >
                    I'm {this.props.name} and I am {this.props.age} years old. {this.props.children} 
                </p>
                <input 
                ref = {(inputEl) => {this.inputElement = inputEl}}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                />
            </Aux>
            // </Aux></React.Fragment>
            // </div>
        )
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);