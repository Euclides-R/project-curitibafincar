import React from 'react';

import { Input, Button } from '../components';

export default function Home(){
    return(
        <div className='show-box radius-form'>
            <h1 className='tytle-page'> CuritibaFinCar </h1>
            <form className="home-login text-size">
                <p>CPF:</p>
                    <Input 
                        className="input-login"
                        type="text"
                        placeHolder="CPF"
                    />
                <p>Senha:</p>
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
