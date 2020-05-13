import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: "João Paulo", age: 25},
      {name: "Marina", age: 20},
      {name: "Julia", age: 21}
    ]
  }

  updateNameState = (newName) => {
    //console.log("foi clicado!");
    //Não fazer isso: this.state.persons[0].name = 'Maximiliam";
    this.setState( {
      persons: [
        {name: newName, age: 45},
        {name: "Graciana", age: 40},
        {name: "Leonardo", age: 41}
      ]
    });
  }

  changeNameState = (event) => {
    this.setState( {
      persons: [
        {name: 'newName', age: 45},
        {name: event.target.value, age: 40},
        {name: "Leonardo", age: 41}
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1> Hello World!!! </h1>
        <p> This is really good! </p>
        <button style={style} onClick={() => this.updateNameState('João Paulo PM')}> Update Data </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.updateNameState.bind(this, 'JP')}>Meus Hobbies: Futebol</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.changeNameState}></Person>
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
