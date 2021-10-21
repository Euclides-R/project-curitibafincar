import React, { useState } from 'react';

import { Button, Input } from '../../components';

export default function NewFin(){
    const [name, setName] = useState('');
  const [corporateName, setCorporatename] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, corporateName, cnpj, email, password);
    
  }

    return(
        <div className='show-box radius-form'>
          <h1 className="title-page">Cadastrar nova Financeira</h1>
            <form onSubmit={handleSubmit} className='text-size'>
              <p>Empresa: *</p>
                <Input
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  type="text"
                  placeHolder="Curitiba"
                />
              <p>Razão Social: *</p>
                <Input
                  value={corporateName}
                  onChange={(e) => {setCorporatename(e.target.value)}}
                  type="text"
                  placeHolder="Curitiba"
                />
              <p>C.N.P.J: *</p>
                <Input
                  value={cnpj}
                  onChange={(e) => {setCnpj(e.target.value)}}
                  type="text"
                  placeHolder="111.222.333-44"
                />
              <p>Email: *</p>
                  <Input
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    type="text"
                    placeHolder="curitibafincar@financas.com.br"
                  />
              <p>Senha: *</p>
                  <Input
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password"
                    placeHolder="Digite sua senha"
                  />
              <Button className="btn-signup radius-form">Cadastrar</Button>
            </form>
        </div>
    );
};
