import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='home radius-form'>
            <form className="home-login">
                    <Input 
                        className="input-login"
                        type="text"
                        placeHolder="Usuário"
                    />
                    <Input
                        className="password-login" 
                        type="password"
                        placeHolder="Senha"
                    />
                <Button className="login-button radius-form">Entrar</Button>
            </form>
            <div className="other-options">
                <p>Esqueceu sua senha? <a href="/ResetPass">Clique aqui</a></p>
                <p>Não possui cadastro? <a href="/SignUp">Clique aqui</a></p>
            </div>
        </div>
    );
};
