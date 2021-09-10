import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='show-box radius-form'>
          <h1 className="tytle-page">Recuperar senha</h1>
            <form className='form-rp text-size'>
              <p>C.P.F:</p>
                <Input
                  id="cpf"
                  type="text"
                  placeHolder="Digite sua senha"
                />
              <p>Senha:</p>
                <Input
                  id="password"
                  type="password"
                  placeHolder="Digite sua senha"
                />
              <p>Nova Senha:</p>
                <Input
                  id="password-repeat"
                  type="password"
                  placeHolder="Digite novamente sua senha"
                />
              <p>Código de confirmação:</p>
                <Input
                  id="code"
                  type="text"
                  placeHolder="Digite novamente sua senha"
                />
                <Button className="btn-rp radius-form">Confirmar</Button>
            </form>
        </div>
    );
};
