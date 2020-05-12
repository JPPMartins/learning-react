import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: "João Paulo", age: 25},
      {name: "Marina", age: 20},
      {name: "Julia", age: 21}
    ],
    otherState: 'other value'
  });

  const updateNameState = () => {
    setPersonsState( {
      persons: [
        {name: "Carlos", age: 45},
        {name: "Graciana", age: 40},
        {name: "Leonardo", age: 41}
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hello World!!! </h1>
      <p> This is really good! </p>
      <button onClick={updateNameState}> Update data </button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>Meus Hobbies: Futebol</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );
}

export default App;
