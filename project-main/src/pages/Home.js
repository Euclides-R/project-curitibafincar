import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='home radius-form'>
            <form className="home-login">
                <div className="home-login_style">
                    <p>Usuário</p>
                    <Input 
                        type="text"
                        placeHolder="Usuário"
                    />
                </div>
                <div className="home-login_style">
                    <p>Senha</p>
                    <Input 
                        type="text"
                        placeHolder="Senha"
                    />
                </div>
                <Button className="font-button radius-form">Entrar</Button>
            </form>
            <div className="other-options">
                <p>Esqueceu sua senha? <a href="#">Clique aqui</a></p>
                <p>Não possui cadastro? <a href="#">Clique aqui</a></p>
            </div>
        </div>
    );
};
