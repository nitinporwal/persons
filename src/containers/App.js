// USE OF setState TO SET THE STATE 

import React, { Component } from 'react';
// import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClasses';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    person: [
      { id: "AD1", name: "Max", age: 21},
      { id: "DFSdf2", name: "Staphenie", age: 24},
      { id: "adf3", name: "Jose", age: 53},
    ],
     otherState: "some other value",
     showPersons: false,
     showCockpit: true,
     changeCounter: 0,
     authenticated: false
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
      person: persons,
      changeCounter: prevState.changeCounter +1
    }});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // Old one.....
    // let persons = this.state.person.slice();
    // Modern one......
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render')
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      color: 'white',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }
    let persons = null;
    

    if(this.state.showPersons) {
      // console.log(classes)
      persons = (
        // using map function....
          <div>
            <Persons 
              clicked = {this.deletePersonHandler} 
              changed = {this.nameChangedHandler}
              person = {this.state.person}
              isAuthenticated = {this.state.authenticated} />
          </div>
          //  without using map function.....
          // <div>
          //   <Person 
          //     name = {this.state.person[0].name} 
          //     age={this.state.person[0].age} 
          //     click = {this.switchNameHandler.bind(this, 'Nitin!')} >
          //     My Hobbies: Racing
          //   </Person>
          //   <Person 
          //     name = {this.state.person[1].name} 
          //     age = {this.state.person[1].age} 
          //     changed = {this.nameChangedHandler}/>
          //   <Person 
          //     name = {this.state.person[2].name} 
          //     age = {this.state.person[2].age}/>
          //   <Person 
          //     name = {this.state.person[3].name} 
          //     age = {this.state.person[3].age} />
          // </div>
          );
          style.backgroundColor = 'red';
          // btnClass = classes.red;
          // style[':hover']={
            //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }
    
    return (
      // <StyleRoot>
        // <div className={classes.App}>
        <Aux>
          <button
            onClick = {() => {
              this.setState({showCockpit: false});
              }}
          >
            Remove Cockpit
          </button>
          <AuthContext.Provider
            value= {{
              authenticated: this.state.authenticated, 
              login: this.loginHandler
              }}
            >
            {
              this.state.showCockpit ? 
                <Cockpit 
                title = {this.props.appTitle}
                showPersons = {this.state.showPersons}
                personLength = {this.state.person.length}
                clicked = {this.togglePersonsHandler}
              /> : null
            }
            {persons}
          </AuthContext.Provider>
        </Aux>
        // </div>
      // </StyleRoot>
    );
  }
}

export default withClass(App, classes.App);


// #############################################################################################################
// // USE OF HOOKS TO SET STATE

// import React, {useState} from 'react';
// import Person from './Person/Person';
// import './App.css';

// const app = props => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: "Nitin", age: 21},
//       { name: "Mayank", age: 24},
//       { name: "Ram", age: 53},
//       { name: "Laxmi", age: 49}
//     ]
//   });
//   const [otherState, setOtherState] = useState({
//     otherState: "some other value"
//   })
//   console.log(personState, otherState);
//   const switchNameHandler = () => {
//     setPersonState({
//       person: [
//         { name: "Nitin Porwal", age: 21},
//         { name: "Mayank", age: 24},
//         { name: "Ram", age: 53},
//         { name: "Laxmi", age: 51}
//       ]
//     });
//   };
//   return (
//     <div className="App">
//       <h1>Hi I am now using react for my frontend!:)</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name = {personState.person[0].name} age={personState.person[0].age} > My Hobbies: Racing</Person>
//       <Person name = {personState.person[1].name} age = {personState.person[1].age} />
//       <Person name = {personState.person[2].name} age = {personState.person[2].age}/>
//       <Person name = {personState.person[3].name} age = {personState.person[3].age} />
//     </div>
//   );
// }

// export default app;