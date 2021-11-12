import React, { useState } from 'react';

import { Button } from '../../components';
import companies from '../../hooks/companies';

export default function Financings() {
    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Financiadoras</h1>
            <div className="list-financings">
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
                <Button className="btn-position radius-form">Atualizar Lista</Button>
            </div>
            <Button className="radius-form" kind="second" url="/AdminHome">Voltar</Button>
        </div>
    );
};
