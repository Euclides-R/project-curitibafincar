import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='signup radius-form'>
            <form className='form-signup'>
              <p>Nome Completo:</p>
                  <Input
                    type="text"
                    placeHolder="Digite seu nome"
                  />
              <p>CPF:</p>
                  <Input
                    type="text"
                    placeHolder="111.222.333-44"
                  />
              <p>Email:</p>
                  <Input
                    type="text"
                    placeHolder="curitibafincar@email.com"
                  />
              <p>Senha:</p>
                  <Input
                    type="password"
                    placeHolder="Digite sua senha"
                  />
                <p>Confirmar a Senha:</p>
                  <Input
                    type="password"
                    placeHolder="Digite novamente sua senha"
                  />
            </form>
        </div>
    );
};
