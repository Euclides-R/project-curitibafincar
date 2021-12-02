import React, { useState, useContext } from 'react';
import { AuthContext } from '../hooks/auth';
import { withRouter } from 'react-router';

import { Input, Button } from '../components';

const Home = ({
    history
}) => {
    const {
        register, handleSubmit, errors, formState,
      } = useForm();

      const handleOnSubmit = async (payload, e) => {
        e.persist();
    
        if (!formState.isSubmitting) {
          let requestStatus = 'success';
          try {
            const { data } = await CompanyService.registerCompany(payload);
            console.log(data);
          } catch (error) {
            requestStatus = 'error';
          }
    
          if (requestStatus === 'success') renderpage();
        }
      };

    
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
            <form onSubmit={handleSubmit(handleOnSubmit)} className="text-size">
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
