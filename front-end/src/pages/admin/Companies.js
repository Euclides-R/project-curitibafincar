import React, { useState, useEffect } from 'react';

import { Button } from 'components';

import CompanyService from 'services';

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const { data } = await CompanyService.getCompanies();
    setCompanies(data);
  }

  useEffect(() => {
    fetchCompanies();
  });

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
            {companies.map((company, i) => {
              return (
                <tr key={company.id}>
                  <td>{company.id}</td>
                  <td>{company.name}</td>
                  <td>{company.reason_social}</td>
                  <td>{company.cnpj}</td>
                  <td>{company.address}</td>
                  <td>{company.interest_rate}%</td>
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
