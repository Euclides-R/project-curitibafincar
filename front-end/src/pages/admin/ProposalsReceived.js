import React, { useEffect, useState } from 'react';

import { Button } from '../../components';
import contracts from '../../hooks/contracts';

export default function ProposalsReceived() {

    /**
     *  Estado [] com todos os estados, quando vir da api os dados 
     *  deve ser preenchido da mesma forma
     *  @var statusAndIdContract
     *  @examle --> [
     *    { id:1 , status:false },
     *    { id:2 , status:true },
     *    { id:3 , status:true  } 
     * ]
     */
    const [statusAndIdContract, setStatusAndIdContract] = useState([]);

    useEffect(() => {
        /**
         * Aqui só estou preenchendo o estado statusAndIdContract com
         * os ids e os states 
         * @var reducer
         * @param {Array} @type 
         * @param {Object} @type 
         */
        const reducer = contracts.reduce((increment, contract) => {
            increment.push({
                id: contract.id, status: contract.status,
            })
            return increment;
        }, [])
        /**
         * Preencho os dados que estão vazios
         */
        setStatusAndIdContract(reducer);

        /**
         *  Sempre que o setStatusAndIdContract sofrer alteração
         *  o componente é renderizado novamente
         */
    }, [setStatusAndIdContract]);

    /**
     * 
     * @param {int} i 
     * @param {enum:'active':'inactive'} typeOfClick 
     */
    async function aprovedContract(i, typeOfClick = 'active') {

        /**
         *  Essa linha deve ser substituida pela api que
         *  consome os dados do backend , no caso o axios
         *  @example --> const response = await axios.post('contracts',arrayContracts)
         */
        await new Promise((resolve, reject) => {
            return setTimeout(() => {
                return resolve('ok');
            }, 500);
        })

        /**
         *  Em uma situação real o certo é essa linha vir antes
         *  do disparo para o backend, essa simulação de 500ms,
         *  serve só para entender o funcionamento , ou seja
         *  a linha do new Promise pode ser comentada e a ação
         *  acontece sem delay
         */
        const newElement = contracts.map((element) => {
            if (element.id === i) {
                element.status = typeOfClick === 'active' ? true : false;
            }
            console.log(element);
            return element;
        })
        setStatusAndIdContract(newElement)
    }

    /**
     * No primeiro momento statusAndIdContract esta vazio,
     * o certo seria colocar um loading aqui,
     * na segunda renderização o compomente tera item pois dentro
     * do useEffect no array de dependências esta o setStatusAndIdContract,
     * ou seja , sempre que o setStatusAndIdContract for modificado sera renderizado 'rerender',
     */
    if (!statusAndIdContract.length) return null;

    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas pendentes de aprovação</h1>
            <div className="pending">
                <table className="list-table list-financings">
                    <thead>
                        <tr className="bold-font">
                            <td>Nome</td>
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
                            return (
                                <tr key={cont.id}>
                                    <td>{cont.name}</td>
                                    <td>{cont.amount}</td>
                                    <td>{cont.companie}</td>
                                    <td>{cont.entry_date}</td>
                                    <td>{cont.installments_date}</td>
                                    <td>{cont.type}</td>
                                    <td>{cont.value}</td>
                                    <td>
                                        <input type="radio" name={`choice-radio${cont.id}`} checked={statusAndIdContract[i].status} onClick={() => aprovedContract(cont.id, "active")} />Aprovado
                                        <input type="radio" name={`choice-radio${cont.id}`} checked={!statusAndIdContract[i].status} onClick={() => aprovedContract(cont.id, "inactive")} />Rejeitado
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Button className="btn-position radius-form">Resultado</Button>
            </div>
        </div>
    )
}
