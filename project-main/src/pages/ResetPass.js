import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='signup radius-form'>
          <h1 className="tytle-page">Cadastro Usuário</h1>
            <form className='form-signup'>
              <p>Senha:</p>
                  <Input
                    type="password"
                    placeHolder="Digite sua senha"
                  />
                <p>Nova Senha:</p>
                  <Input
                    type="password"
                    placeHolder="Digite novamente sua senha"
                  />
            </form>
        </div>
    );
};
