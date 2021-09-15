import React, { useState } from 'react';

import { Input, Button } from '../components';

export default function Home(){

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(nome, sobrenome, cpf, email, password);
    
  }

    return(
        <div className='show-box radius-form'>
          <h1 className="title-page">Cadastrar Usuário</h1>
            <form onSubmit={handleSubmit} className='text-size'>
              <p>Nome: *</p>
                <Input
                  value={nome}
                  onChange={(e) => {setNome(e.target.value)}}
                  type="text"
                  placeHolder="Curitiba"
                />
              <p>Sobrenome: *</p>
                <Input
                  value={cpf}
                  onChange={(e) => {setSobrenome(e.target.value)}}
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
              <Button className="btn-signup radius-form">Confirmar</Button>
            </form>
            <div className="other-options">
                <p>Já possui conta? <a href="/">Entrar</a></p>
            </div>
        </div>
    );
};
