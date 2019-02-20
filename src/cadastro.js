import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import * as clienteAction from './actions/clientes';
import { connect } from 'react-redux';


class Cadastro extends Component {

    constructor(props){
        super(props);

        console.log(props);
    }

    state = {
        nome : '',
        email : ''
    }

    adicionarCliente = () => {
        this.props.addCliente({id:Math.random(), nome: this.state.nome, email: this.state.email})
        this.setState({nome: '', email: ''})
    }

    limparCampos = () => {
        this.setState({id:'',nome: '', email: ''})
    }

    render(){
        return(
            <div className="container">
                <h2>{this.props.titulo}</h2>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Nome: </label>
                        <input type="text" 
                               className="form-control" 
                               placeholder="Nome" 
                               value = {this.state.nome} 
                               onChange = {(e) => {this.setState({nome: e.target.value})}}
                               />
                    </div>
                    <div className="form-group col-md-6">
                        <label>E-mail: </label>
                        <input type="text" 
                               className="form-control" 
                               placeholder="E-mail"
                               value = {this.state.email} 
                               onChange = {(e) => {this.setState({email: e.target.value})}} 
                               />
                    </div>
                    <div>
                        <button onClick={this.limparCampos}  className="btn btn-link">Limpar</button>
                        <button onClick={this.adicionarCliente} className="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

const mapDispatchToProps = dispatch => bindActionCreators(clienteAction, dispatch);

export default connect(null, mapDispatchToProps)(Cadastro);