import React, { useState } from 'react';

import { Button, Input } from '../../components';

export default function NewFin() {
  
  const [ name, setName ] = useState('');
  const [ reasonSocial, setReasonSocial ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ interestRate, setInterestRate ] = useState('');
  const [ address, setAddress ] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, reasonSocial, address, cnpj, interestRate);

  }

  return (
    <div className='show-box radius-form'>
      <h1 className="title-page">Cadastrar nova Financeira</h1>
      <form onSubmit={handleSubmit} className='text-size'>
        <p>Empresa: *</p>
        <Input
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          type="text"
          placeHolder="Curitiba"
        />
        <p>Razão Social *</p>
        <Input
          value={reasonSocial}
          onChange={(e) => { setReasonSocial(e.target.value) }}
          type="text"
          placeHolder="Financiodora de Veículos"
        />
        <p>CNPJ: *</p>
        <Input
          value={cnpj}
          onChange={(e) => { setCnpj(e.target.value) }}
          type="text"
          placeHolder="11.111.111/0001-11"
        />
        <p>Endereço SEDE: *</p>
        <Input
          value={address}
          onChange={(e) => { setAddress(e.target.value) }}
          type="text"
          placeHolder="R. XV de Novembro, 2120"
        />
        <p>Email: *</p>
        <Input
          value={email}
          onChange={(e) => { setEmail(e.target.value) }}
          type="text"
          placeHolder="curitibafincar@financas.com.br"
        />
        <p>Taxa de Juros: *</p>
        <Input
          value={interestRate}
          onChange={(e) => { setInterestRate(e.target.value) }}
          type="password"
          placeHolder="5%"
        />
        <Button className="btn-signup radius-form">Cadastrar</Button>
      </form>
      <Button className="btn-position radius-form" kind="second" url="/AdminHome">Voltar</Button>
    </div>
  );
};
