import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: "João Paulo", age: 25},
      {name: "Marina", age: 20},
      {name: "Julia", age: 21}
    ]
  }

  updateNameState = () => {
    //console.log("foi clicado!");
    //Não fazer isso: this.state.persons[0].name = 'Maximiliam";
    this.setState( {
      persons: [
        {name: "Carlos", age: 45},
        {name: "Graciana", age: 40},
        {name: "Leonardo", age: 41}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World!!! </h1>
        <p> This is really good! </p>
        <button onClick={this.updateNameState}> Update data </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Meus Hobbies: Futebol</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
    // html não é JSX
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Isso está funcionando'));

    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/
  }
}

export default App;
