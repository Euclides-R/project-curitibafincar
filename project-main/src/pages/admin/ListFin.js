import React, { useState } from 'react';

import { Button } from '../../components';

export default function ListFin(){
    return(
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas Aprovadas</h1>
            <div className="list-financings">
                <table className="list-table">
                    <thead>
                        <tr className="bold-font">
                            <td>Código de Op.</td>
                            <td>Nome</td>
                            <td>Valor Financiado</td>                        
                            <td>Qntd de X</td>                        
                            <td>Lucro</td>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0001</td>
                            <td>Euclides Rodrigues Junior</td>
                            <td>R$ 15.000,00</td>                        
                            <td>x48</td>                        
                            <td>4%</td>                        
                        </tr>
                        <tr>
                            <td>0002</td>
                            <td>Lucas Martins</td>
                            <td>R$ 18.000,00</td>                        
                            <td>x48</td>                        
                            <td>7%</td>                        
                        </tr>
                    </tbody>
                </table>

                <Button className="btn-position radius-form">Atualizar Lista</Button>
            </div>
        </div>
    )
}
