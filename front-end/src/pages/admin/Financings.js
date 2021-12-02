import React, { useState } from 'react';

import { Button } from '../../components';

export default function Financings(){
    return(
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas Aprovadas</h1>
            <div className="list-financings">
                <table className="list-table">
                    <thead>
                        <tr className="bold-font">
                            <td>Código</td>
                            <td>Empresa</td>
                            <td>CNPJ</td>
                            <td>Qntd de X</td>
                            <td>Lucro</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0001</td>
                            <td>Banco Itaú</td>
                            <td>11.111.111/0001-11</td>
                            <td>x48</td>
                            <td>4%</td>
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>Banco do Bradesco</td>
                            <td>22.222.222/0001-22</td>
                            <td>x48</td>
                            <td>7%</td>
                        </tr>
                    </tbody>
                </table>
                <Button className="btn-position radius-form">Atualizar Lista</Button>
            </div>
        </div>
    );
};
