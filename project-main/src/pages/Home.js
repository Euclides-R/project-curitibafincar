import React, { useState, useContext } from 'react';
import { AuthContext } from '../hooks/auth';

import { Input, Button } from '../components';
import { withRouter } from 'react-router';

const Home = ({
    history
}) => {
    const [inputLogin, setinputLogin] = useState('');
    const [inputPassword, setinputPassword] = useState('');

    const { setUser } = useContext(AuthContext);

    function handleSubmit(e) {
        const { user, name} = e.target;
        setinputLogin({
                ...inputLogin,
                [name]: user,
        });
        setUser(true);
        history.push("/simulation");
    }

    return(
        <div className='show-box radius-form'>
            <h1 className='title-page'> CuritibaFinCar </h1>
            <form onSubmit={handleSubmit} className="text-size">
                <p>Email:</p>
                    <Input
                        value={inputLogin}
                        onChange={(e) => {console.log('alo');
                            setinputLogin(e.target.value)}}
                        type="text"
                        placeHolder="curitibafincar@financas.com.br"
                    />
                <p>Senha:</p>
                    <Input
                        className="password-login"
                        value={inputPassword}
                        onChange={(e) => {setinputPassword(e.target.value)}} 
                        type="password"
                        placeHolder="Senha"
                    />
                <Button className="login-button radius-form" onClick={handleSubmit}>Entrar</Button>
            </form>
            <div className="other-options">
                <p>Esqueceu sua senha? <a href="/ResetPass">Clique aqui</a></p>
                <p>Não possui cadastro? <a href="/SignUp">Clique aqui</a></p>
            </div>
        </div>
    );
};

export default withRouter(Home);
