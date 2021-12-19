import React, { useState, useEffect } from 'react';

import { Button } from '../../components';
import companies from '../../hooks/companies';

import { CompanyService } from '../../services';

export default function Companies() {

    const [data, setData] = useState([]);
    useEffect(() => {
        async function execute() {
            const {data} = await CompanyService.getCompanies();
            setData(data);
        }
        execute();
    }, [setData])

    if (!data.length) {
        return null;
    }

    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Financiadoras</h1>
            <div className="list-Companies">
                <table className="list-table" >
                    <thead>
                        <tr className="bold-font">
                            <td>Código</td>
                            <td>Empresa</td>
                            <td>Razão social</td>
                            <td>CNPJ</td>
                            <td>Enderço</td>
                            <td>Lucro</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((cont, i) => {
                            return (
                                <tr key={cont.id}>
                                    <td>{cont.id}</td>
                                    <td>{cont.name}</td>
                                    <td>{cont.reason_social}</td>
                                    <td>{cont.cnpj}</td>
                                    <td>{cont.address}</td>
                                    <td>{cont.interest_rate}%</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Button className="btn-position radius-form" >Atualizar Lista</Button>
            </div>
            <Button className="radius-form" kind="second" url="/AdminHome">Voltar</Button>
        </div>
    );
};
