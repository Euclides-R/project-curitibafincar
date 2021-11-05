import React, { useState, useContext } from 'react';
import { AuthContext } from '../hooks/auth';

import { Input, Button } from '../components';
import { withRouter } from 'react-router';

const Home = ({
    history
}) => {
    const [inputLogin, setInputLogin] = useState({});

    const { verifyAccount, user } = useContext(AuthContext);


    function handleSubmit(e) {
        e.preventDefault();    
        console.log(inputLogin);

        try {
            verifyAccount(inputLogin);
            if(user.password) {
                history.push('/simulation');
            }
        } catch (error) {
            alert(error);
        }

        // setUser(true);

        // if(inputLogin === true) {
        //     history.href('/simulation');
        // } else {
        //     console.log('Usuário não existe');
        // }
        
    }

    return(
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
                <p>Esqueceu sua senha? <a href="/ResetPass">Clique aqui</a></p>
                <p>Não possui cadastro? <a href="/SignUp">Clique aqui</a></p>
            </div>
        </div>
    );
};

export default withRouter(Home);
