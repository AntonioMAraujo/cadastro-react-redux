import React, { Component} from 'react';

import { bindActionCreators } from 'redux';

import * as clienteAction from './actions/clientes';

import { connect } from 'react-redux';

class Lista extends Component {
   
    render(){
        return(
            <div className="container">
                <br/>
                <table className="table table-hover">
                    <tbody>
                    <tr><td>Nome</td><td>E-mail</td><td>Ações</td></tr>
                    {this.props.clientes.map((cliente) =>
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <button className="btn btn-danger" 
                                        onClick = {() =>{this.props.removeCliente(cliente)}}>Excluir</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                    
                </table>
            </ div>    
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(clienteAction, dispatch);

const mapStateToProps = state => ({
    clientes : state.cliente
});

export default connect(mapStateToProps, mapDispatchToProps)(Lista);