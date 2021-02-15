import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Divya", age: 30 },
      { name: "Ravi", age: 34 },
    ],
    otherState: "some other value",
  };

  // const [otherState, setOthereState] = useState("some other value");

  //console.log(personState, otherState);

  switchNameHandler = () => {
    
    this.setState({
      persons: [
        { name: "Divya", age: 30 },
        { name: "Ravi", age: 34 },
      ]
    });
  };


render() {
  const style = {
       backgroudColor: 'White',
       font: 'inherit',
       border: '1x solid blue',
       padding: '8px',
       cursor: 'pointer'
  };
  return (
    <div className="App">
      <h1>Hi, Iam Divya </h1>
      <p> This really working</p>
      <button 
      style={style}
      onClick={() => this.switchNameHandler}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      />
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}>
      </Person>
    </div>
  );
}
}

export default App;
