import React, { useState } from 'react';

import { Input, Button } from '../components';

export default function Home(){

    const [inputLogin, setinputLogin] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(inputLogin);    
    }

    return(
        <div className='show-box radius-form'>
            <h1 className='tytle-page'> CuritibaFinCar </h1>
            <form onSubmit={handleSubmit} className="home-login text-size">
                <p>CPF:</p>
                    <Input 
                        className="input-login"
                        value={inputLogin}
                        onChange={(e) => {console.log('alo');
                            setinputLogin(e.target.value)}}
                        type="text"
                        placeHolder="CPF"
                    />
                <p>Senha:</p>
                    <Input
                        className="password-login"
                        value={inputPassword}
                        onChange={(e) => {setinputPassword(e.target.value)}} 
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
