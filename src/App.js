import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: 1, name: "João Paulo", age: 25},
      {id: 2, name: "Marina", age: 20},
      {id: 3, name: "Julia", age: 21}
    ],
    showPersons: false
  }

  /*updateNameState = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 45},
        {name: "Graciana", age: 40},
        {name: "Leonardo", age: 41}
      ]
    });
  }*/

  deleteNameHandler = (indexName) => {
    // 2 formas de copiar o estado atual da matriz
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(indexName, 1);
    this.setState({persons: persons});
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = false;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}/>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1> Hello World!!! </h1>
        <p> This is really good! </p>
        <button 
          style={style} onClick={this.togglePersonsHandler}> Show Data
        </button>
        {persons}
      </div>
      
    );
  }
}

/* Outra maneira de fazer o if, menos clean
  {this.state.showPersons === true ? 
    <div>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.updateNameState.bind(this, 'JP')}>Meus Hobbies: Futebol
      </Person>
      <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        changed={this.changeNameState}>
      </Person>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>
      </Person>
    </div> : null
  }
*/

/* método sem usar a função .map() 
<div>
  <Person 
    name={this.state.persons[0].name} 
    age={this.state.persons[0].age} 
    click={this.updateNameState.bind(this, 'JP')}>Meus Hobbies: Futebol
  </Person>
  <Person 
    name={this.state.persons[1].name} 
    age={this.state.persons[1].age} 
    changed={this.changeNameState}>
  </Person>
  <Person 
    name={this.state.persons[2].name} 
    age={this.state.persons[2].age}>
  </Person>
</div>
*/

export default App;
