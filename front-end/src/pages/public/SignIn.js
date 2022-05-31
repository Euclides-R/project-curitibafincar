import React, { useState, useContext } from 'react';
import { AuthContext } from '../../hooks/auth';
import { withRouter } from 'react-router';

import { Input, Button } from '../../components';

const SignIn = ({
    history
}) => {
    const [inputLogin, setInputLogin] = useState({});

    const { verifyAccount, user } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await verifyAccount(inputLogin);
            if (user.password) {
                renderpage();
            }
        } catch (error) {
            console.log(error);
            alert('USUÁRIO OU SENHA NÃO ENCONTRADOS')
        }
    }

    function renderpage() {
        if (user.type_user === 'user') {
            return history.push('/simulation');
        } else if (user.type_user === 'adm') {
            return history.push('/adminhome');
        }
    }

    return (
        <div className='show-box radius-form'>
            <h1 className='title-page'> CuritibaFinCar </h1>
            <form onSubmit={handleSubmit} className="text-size">
                <p>Email:</p>
                <Input
                    name='email'
                    value={inputLogin.email}
                    onChange={(e) => {
                        setInputLogin({
                            ...inputLogin,
                            [e.target.name]: e.target.value,
                        });
                    }}
                    type="text"
                    placeHolder="curitibafincar@financas.com.br"
                />
                <p>Senha:</p>
                <Input
                    name='password'
                    className="password-login"
                    value={inputLogin.password}
                    onChange={(e) => {
                        setInputLogin({
                            ...inputLogin,
                            [e.target.name]: e.target.value,
                        });
                    }}
                    type="password"
                    placeHolder="Senha"
                />
                <Button className="login-button radius-form">Entrar</Button>
            </form>
            <div className="other-options">
                <p>Esqueceu sua senha? <a href="/reset-pass">Clique aqui</a></p>
                <p>Não possui cadastro? <a href="/sign-up">Clique aqui</a></p>
            </div>
        </div>
    );
};

export default withRouter(SignIn);