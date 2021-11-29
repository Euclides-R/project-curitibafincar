import React, { useEffect, useState } from 'react';

import { Button } from '../../components';
import contracts from '../../hooks/contracts';

export default function AllProposals() {

    const [status, setStatus] = useState([{ id: 0, status: false }]);

    useEffect(() => {
        const reducer = contracts.reduce((increment, cont) => {
            increment.push({
                id: cont.id, status: cont.status,
            })
            return increment;
        }, [])
        setStatus(reducer);
    }, [setStatus]);


    if (!status.length) return null;

    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Todas as Propostas</h1>
            <div className="pending">
                <table className="list-table list-Companies">
                    <thead>
                        <tr className="bold-font">
                            <td>Nome</td>
                            <td>Qntd de X</td>
                            <td>Empresa</td>
                            <td>Entrada</td>
                            <td>Vencimentos</td>
                            <td>Tipo</td>
                            <td>Valor</td>
                            <td>Resultado</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contracts.map((cont, i) => {
                            return (
                                <tr key={cont.id}>
                                    <td>{cont.name}</td>
                                    <td>{cont.amount}</td>
                                    <td>{cont.companie}</td>
                                    <td>{cont.entry_date}</td>
                                    <td>{cont.installments_date}</td>
                                    <td>{cont.type}</td>
                                    <td>{cont.value}</td>
                                    <td>{cont.status}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Button className="btn-position radius-form">Atualizar</Button>
            </div>
            <Button className="radius-form" kind="second" url="/AdminHome">Voltar</Button>
        </div>
    )
}
