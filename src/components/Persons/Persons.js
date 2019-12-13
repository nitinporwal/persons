import React, {PureComponent} from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillRecieveProps', props);
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // return true;
    //     return (nextProps.person !== this.props.person || nextProps.clicked !== this.props.clicked || nextProps.changed !== this.props.changed);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot'};
    }

    // componentWillUpdate() {

    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering...');
        return this.props.person.map((person, index) => {
            return (
                <Person
                click = {()=>this.props.clicked(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed={(event) => this.props.changed(event, person.id)} 
                isAuth = {this.props.isAuthenticated}/>
            )
        }
        )   
    }
}
        

export default Persons;