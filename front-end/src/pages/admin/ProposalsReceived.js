import React, { useEffect, useState } from 'react';

import { Button } from '../../components';
import contracts from '../../hooks/contracts';

export default function ProposalsReceived() {

    const [status, setStatus] = useState([{id: 0, status: false}]);

    useEffect(() => {
        const reducer = contracts.reduce((increment, cont) => {
            increment.push({
                id: cont.id, status: cont.status,
            })
            return increment;
        }, [])
        setStatus(reducer);
        console.log(status);
    }, [setStatus]);

    async function aprovedContract(i) {
        console.log("test");
        const fakeAPI = await new Promise((resolve, rejeited) => {
            return setTimeout(() => {
                return resolve('');
            }, 500);
        })
        contracts.forEach((f) => {
            let index = false
            if (f===i) {
                index = true;
                setStatus([
                    {...status},
                    index
                ])
            }
        })
    }
    
    if (!status.length) return null;

    return(
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas pendentes de aprovação</h1>
            <div className="pending">
            <table className="list-table">
            <thead>
                <tr className="bold-font">
                            <td>Qntd de X</td>                        
                            <td>Empresa</td>
                            <td>Entrada</td>
                            <td>Vencimentos</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Aprovado ou Reprovado</td>                        
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((cont, i) => {
                           return(
                            <tr key={cont.id}>
                                <td>{cont.amount}</td>
                                <td>{cont.companie}</td>
                                <td>{cont.entry_date}</td>
                                <td>{cont.installments_date}</td>
                                <td>{cont.type}</td>
                                <td>{cont.value}</td>
                                <td>
                                    <input type="radio" name={`choice-radio${cont.id}`} checked={status[i].status} onClick={() => aprovedContract(cont.id)} />Sim
                                    <input type="radio" name={`choice-radio${cont.id}`} checked={!status[i].status} onClick={() => aprovedContract(cont.id)} />Não
                                </td> 
                            </tr>
                           )
                        })}
                        <Button>Resultado</Button>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
