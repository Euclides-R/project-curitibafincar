import React, { useState } from 'react';

import { Button } from '../../components';

export default function ProposalsReceived(){

    function loadNames(name, value, amount) {
        return (
            <tr>
                <td>{name}</td>
                <td>{value}</td>
                <td>{amount}</td>
                <td>
                    <input type="checkbox">Sim</input>
                    <input type="checkbox">Não</input>
                </td> 
            </tr>
        )
    }
    
    return(
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas pendentes de aprovação</h1>
            <div className="pending">
            <table className="list-table">
            <thead>
                <tr className="bold-font">
                            <td>Nome</td>
                            <td>Valor</td>                        
                            <td>Qntd de X</td>                        
                            <td>Aprovado ou Reprovado</td>                        
                        </tr>
                    </thead>
                    <tbody>
                        {/* {loadNames('Euclides', 'R$ 25.000,00', '48x')} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
