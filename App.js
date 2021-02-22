import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    persons: [
      { name: "Divya", age: 30 },
      { name: "Ravi", age: 34 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  // const [otherState, setOthereState] = useState("some other value");

  //console.log(personState, otherState);

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
    };
    // const person = Object.assign({},
    // this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroudColor: "#fff",
      color: "White",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, Index) => {
            return (
              <person
                click={() => this.deletePersonHandler(Index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundOlor = 'red';
    }
     let classes = ['red', 'bold'].join(' ');   

    return (
      <div className="App">
        <h1>Hi, I am Divya </h1>
        <p className= {classes}> This really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Name
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
            ></Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
