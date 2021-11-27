import React, { useState } from 'react';

import { Button } from '../../components';
import companies from '../../hooks/companies';

import company from '../../services';

export default function Companies() {

    const testAxios = company.getComapnies();
    
    function handleSubmit() {
        console.log(testAxios);
    }

    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Financiadoras</h1>
            <div className="list-Companies">
                <table className="list-table">
                    <thead>
                        <tr className="bold-font">
                            <td>Código</td>
                            <td>Empresa</td>
                            <td>C.N.P.J</td>
                            <td>Lucro</td>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((cont, i) => {
                            return (
                                <tr key={cont.id}>
                                    <td>{cont.id}</td>
                                    <td>{cont.name}</td>
                                    <td>{cont.cpnj}</td>
                                    <td>{cont.interest_rate}%</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Button className="btn-position radius-form" onClick={handleSubmit} >Atualizar Lista</Button>
            </div>
            <Button className="radius-form" kind="second" url="/AdminHome">Voltar</Button>
        </div>
    );
};
