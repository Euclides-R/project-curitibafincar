import React, { useState } from 'react';

import { Input, Button } from '../components';

export default function Home(){

  const [cpf, setCpf] = useState('');
  const [codeValid, setCodeValid] = useState('');
  const [inputPassword, setinputPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(cpf, codeValid, inputPassword);    
}

    return(
        <div className='show-box radius-form'>
          <h1 className="title-page">Recuperar senha</h1>
            <form onSubmit={handleSubmit} className='text-size'>
              <p>C.P.F:</p>
                <Input
                  value={cpf}
                  onChange={(e) => {setCpf(e.target.value)}}
                  type="text"
                  placeHolder="111.222.333-44"
                />
              <p>Nova Senha:</p>
                <Input
                  value={inputPassword}
                  onChange={(e) => {setinputPassword(e.target.value)}}
                  type="password"
                  placeHolder="Digite novamente sua senha"
                />
              <p>Código de confirmação:</p>
                <Input
                  value={codeValid}
                  onChange={(e) => setCodeValid(e.target.value)}
                  type="text"
                  placeHolder="Digite novamente sua senha"
                />
                <Button className="btn-rp radius-form">Confirmar</Button>
            </form>
            <div className="other-options">
                <p><a href="/">⬅ Voltar</a></p>
            </div>
        </div>
    );
};
