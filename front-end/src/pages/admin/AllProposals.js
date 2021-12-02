import React, { useEffect, useState } from 'react';
import { ContractService } from '../../services';

import { Button } from '../../components';

export default function AllProposals() {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function execute() {
            try {
                const {data} = await ContractService.getContracts();
                console.log(data);
                setData(data);
            } catch (error) {
                console.log(error);
            }
        } 
        execute();
    }, [setData])

    if (!data.length) {
        return null;
    }

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
                        {data.map((cont, i) => {
                            return (
                                <tr key={cont.id}>
                                    <td>{cont.users_id}</td>
                                    <td>{cont.amount_times}</td>
                                    <td>{cont.company_id}</td>
                                    <td>{cont.entry_date}</td>
                                    <td>{cont.installments_date}</td>
                                    <td>{cont.type_contract}</td>
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
