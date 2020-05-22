import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import './Person/Person.css';
//import Person from './Person/Person';
import UserOutPut from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './UserInput/UserInput.css';
import './UserOutput/UserOutput.css';

/*
Siga as instruções explicadas no vídeo do problema e tente implementar uma solução por conta própria. Compare-o com a minha solução (vídeos + arquivos para download) depois.

As instruções são:

OK - 1) Crie dois novos componentes: UserInput e UserOutput
OK - 2) UserInput deve conter um elemento de entrada, UserOutput dois parágrafos
OK - 3) Saída de vários componentes UserOutput no componente App (qualquer texto de parágrafo de sua escolha)
OK - 4) Passe um nome de usuário (de sua escolha) para UserOutput por meio de adereços e exiba-o lá
OK - 5) Adicione estado ao componente App (=> o nome de usuário) e passe o nome de usuário para o componente UserOutput
OK - 6) Adicione um método para manipular o estado (=> um método manipulador de eventos)
OK - 7) Passe a referência do método manipulador de eventos ao componente UserInput e ligue-o ao evento de alteração de entrada
OK - 8) Verifique se a nova entrada inserida pelo usuário substitui o nome de usuário antigo passado para UserOutput
9) Adicione ligação bidirecional à sua entrada (em UserInput) para também exibir o nome de usuário inicial
10) Adicione estilo de sua escolha aos seus componentes/elementos nos componentes - com estilos embutidos e folhas de estilo

*/

class App extends Component {
  state = {
    users: [
      {name: "Marina Bonetti", age: 20 },
      {name: "Julia Martins", age: 20}
    ]
  }

  UpdateNameState = (dataName, dataAge) => {
    this.setState({
      users: [
        {name: dataName, age: dataAge },
        {name: "João Martins", age:45 }
      ]
    });
  }

  ChangeNameState = (event) => {
    this.setState({
      users: [
        {name: event.target.value},
        {name: "Renato", age: 47 }
        
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1> Primeiro exercício de React </h1>
        <button onClick={() => this.UpdateNameState('Maria Aparecida', '72')}> Update Information </button>
        <UserOutPut name={this.state.users[0].name} age={this.state.users[0].age}></UserOutPut>
        <UserOutPut name={this.state.users[1].name} age={this.state.users[1].age}></UserOutPut>
        <UserOutPut name="João Paulo" age="25"></UserOutPut>
        <UserInput name={this.state.users[0].name} changed={this.ChangeNameState}></UserInput>
      </div>
    );
  }
}

export default App;
