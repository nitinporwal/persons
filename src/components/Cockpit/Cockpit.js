import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.css'
import Aux from '../../hoc/Aux';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef= useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);
    console.log(props);
    useEffect (() => {
        console.log('[Cockpit.js] useEffect');
        // Http requests
        setTimeout(() => {
            alert('Saved data to the cloud again');
        }, 500);
    }, [props.person]);

// If the array is empty the the useEffect will run only once when the particular component is rendered
// But is we give one or more value to the array it always run whenever the componenet is rendered or rerendered

    
        useEffect (() => {
            console.log('[Cockpit.js] useEffect');
            // Http requests

            // setTimeout(() => {
            //     alert('Saved data to the cloud');
            // }, 1000);
            toggleBtnRef.current.click()
            return () => {
                console.log('[Cockpit.js] cleanup work in useEffect');
            }
        }, []);

        useEffect(() => {
            console.log('[Cockpit.js] 2nd useEffect');
            return () => {
                console.log('[Cockpit.js] cleanup work in 2nd useEffect');
            }
        })

        let btnClass = '';
        let assignedClasses = [];
        if(props.personLength<=2) {
            assignedClasses.push(classes.red);
        }
        if(props.personLength<=1) {
            assignedClasses.push(classes.bold);
        }
        if(props.showPersons) {
            btnClass = classes.red;
        }
        return (
            // <div className = {classes.Cockpit}>
            <Aux>
                <h1 >{props.title}</h1>
                <p className= {assignedClasses.join(' ')}>Hey, this line may be bold or red or both!!!!!</p>
                <button 
                ref={toggleBtnRef} 
                className= {btnClass} 
                onClick={props.clicked}>
                    Toggle Persons
                </button>
                <button onClick = {authContext.login}>
                    Login
                </button>
            </Aux>
            // </div>
        );
        // return [
        //     <h1 key="i1">{props.title}</h1>,
        //     <p key="i2" className= {assignedClasses.join(' ')}>Hey, this line may be bold or red or both!!!!!</p>,
        //     <button key="i3" className= {btnClass} onClick={props.clicked}>Toggle Persons</button>
        // ];
}

export default React.memo(Cockpit);