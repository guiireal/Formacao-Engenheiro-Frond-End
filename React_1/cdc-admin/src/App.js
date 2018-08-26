import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import InputCustomizado from './componentes/InputCustomizado';
import ButtonCustomizado from './componentes/ButtonCustomizado';

class App extends Component {

  constructor() {
    super();
    this.state = {lista: [], nome: "", email: "", senha: ""};
    this.enviaFormulario = this.enviaFormulario.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
  }

  // 'componentWillMount()' -> EXECUTA ANTES O RENDER SER EXECUTADO 
  // 'componentDidMount()' -> EXECUTA DEPOIS O RENDER SER EXECUTADO

  componentDidMount() {
    $.ajax({
      url: "http://cdc-react.herokuapp.com/api/autores",
      dataType: "json",
      success: function(autores) {
        this.setState({lista: autores});
      }.bind(this)
    })
  }

  enviaFormulario(evento) {
    evento.preventDefault();
    $.ajax({
      url: "http://cdc-react.herokuapp.com/api/autores",
      contentType: "application/json",
      dataType: "json",
      type: "post",
      data: JSON.stringify({
        nome: this.state.nome, 
        email: this.state.email, 
        senha: this.state.nome
      }),
      success: function(resposta) {
        this.setState({lista: resposta});
      }.bind(this),
      error: function(resposta) {
        console.log("Erro!");
      }
    });
  }

  setNome(evento) {
    this.setState({nome: evento.target.value});
  }

  setEmail(evento) {
    this.setState({email: evento.target.value});
  }

  setSenha(evento) {
    this.setState({senha: evento.target.value});
  }

  render() {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
            <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Biblioteca</a>
            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
            </ul>
          </div>
        </div>
        <div id="main">
          <div className="header">
            <h1>Cadastro de Autores</h1>
          </div>
          <div className="content" id="content">
            <div className="pure-form pure-form-aligned">
              <form className="pure-form pure-form-aligned" onSubmit={this.enviaFormulario} method="post">

                <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>
                <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>
                <InputCustomizado id="senha" type="password" value={this.state.senha} onChange={this.setSenha} label="Senha"/>
                
                <ButtonCustomizado type="submit" label="Gravar" />

              </form>
            </div>  
            <div>            
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.lista.map(autor => {
                      return (
                        <tr key={autor.id}>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table> 
            </div>             
          </div>
        </div>  
      </div>
    );
  }
}

export default App;

