import React, { useState } from 'react';

import { Input, Button } from '../components';

export default function Home(){

  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name, lastName, cpf, email, password);
    
  }

    return(
        <div className='show-box radius-form'>
          <h1 className="title-page">Cadastrar Usuário</h1>
            <form onSubmit={handleSubmit} className='text-size'>
              <p>Nome: *</p>
                <Input
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  type="text"
                  placeHolder="Curitiba"
                />
              <p>Sobrenome: *</p>
                <Input
                  value={lastName}
                  onChange={(e) => {setLastname(e.target.value)}}
                  type="text"
                  placeHolder="FinCar"
                />
              <p>C.P.F: *</p>
                <Input
                  value={cpf}
                  onChange={(e) => {setCpf(e.target.value)}}
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
            <div className="other-options">
                <p>Já possui conta? <a href="/">Entrar</a></p>
            </div>
        </div>
    );
};
