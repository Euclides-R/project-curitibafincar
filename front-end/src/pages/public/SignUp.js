import React, { useState } from 'react';
import { UserService } from '../../services';

import { Input, Button } from '../../components';

export default function Home() {

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !cpf || !email || !password) {
      alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
      return
    }

    try {
      await UserService.registerUser({ name, cpf, email, password });
      alert("CADASTRO CRIADO")
    } catch (error) {
      alert("CADASTRO NÃO INSERIDO, ERRO");
      console.log(error);  
    }    
  }

    return(
        <div className='show-box radius-form'>
          <h1 className="title-page">Cadastrar Usuário</h1>
            <form onSubmit={handleSubmit} className='text-size'>
              <p>Nome Completo: *</p>
                <Input
                  value={name}
                  onChange={(e) => {setName(e.target.value)}}
                  type="text"
                  placeHolder="Curitiba"
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
