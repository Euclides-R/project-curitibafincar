import React, { useState, useEffect, useCallback } from 'react';

import { Button } from '../../components';

import { ContractService } from '../../services';

export default function ProposalsReceived() {
  const [contracts, setContracts] = useState([]);

  const fetchProposals = useCallback(async () => {
    const { data } = await ContractService.getContracts();
    console.log(data)

    setContracts(data);
  }, []);

  const onChangeStatus = async (statusSelected, contractId) => {
    await ContractService.putContract(contractId, { status: statusSelected });

    fetchProposals();
  }

  useEffect(() => {
    fetchProposals();
  }, [fetchProposals]);

    return (
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas pendentes de aprovação</h1>
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
                        <td>Aprovado ou Reprovado</td>
                      </tr>
                    </thead>
                    <tbody>
                      {contracts.map((contract) => {
                        return (
                          <tr key={contract.id}>
                            <td>{contract.user.name}</td>
                            <td>{contract.amount_times}</td>
                            <td>{contract.company.name}</td>
                            <td>{contract.entry_date}</td>
                            <td>{contract.installments_date}</td>
                            <td>{contract.type_contract}</td>
                            <td>{contract.value}</td>
                            <td>
                              <input
                                type="radio"
                                id="approved"
                                value="aprovada"
                                checked={contract.status === 'aprovada'}
                                onChange={(e) => onChangeStatus(e.target.value, contract.id)}
                              />Aprovado
                              &nbsp;
                              <input
                                type="radio"
                                id="rejected"
                                value="rejeitada"
                                checked={contract.status === 'rejeitada'}
                                onChange={(e) => onChangeStatus(e.target.value, contract.id)}
                              />Rejeitado
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                </table>
                <Button className="btn-position radius-form">Resultado</Button>
            </div>
            <Button className="radius-form" kind="second" url="/AdminHome">Voltar</Button>
        </div>
    )
}
