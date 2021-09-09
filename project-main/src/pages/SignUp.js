import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='signup radius-form'>
          <h1 className="tytle-page">Cadastro Usuário</h1>
            <form className='form-signup text-size'>
              <p>CPNJ: *</p>
                  <Input
                    type="text"
                    placeHolder="Digite seu nome"
                  />
              <p>Razão Social: *</p>
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
              <Button className="btn-signup radius-form">Confirmar</Button>
            </form>
        </div>
    );
};
