import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


import { Button, Input } from '../../components';
import { CompanyService } from '../../services';

export default function NewCom() {
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

      // if (requestStatus === 'success') history.push('/companies');
    }
  };

  const requiredMessage = { required: 'É obrigatório' };

  return (
    <div className='show-box radius-form'>
      <h1 className="title-page">Cadastrar nova Financeira</h1>
      <form className='text-size' onSubmit={handleSubmit(handleOnSubmit)}>
        <label>Empresa: *</label>
        <Input
          ref={register(requiredMessage)}
          name="name"
          // errorMessage={errorMessageFor('name', errors)}
          type="text"
          placeHolder="Curitiba"
        />
        <label>Razão Social *</label>
        <Input
          ref={register(requiredMessage)}
          name="reason_social"
          // errorMessage={errorMessageFor('reason_social', errors)}
          type="text"
          placeHolder="Financiodora de Veículos"
        />
        <label>CNPJ: *</label>
        <Input
          ref={register(requiredMessage)}
          name="cnpj"
          // errorMessage={errorMessageFor('cnpj', errors)}
          type="text"
          placeHolder="11.111.111/0001-11"
        />
        <label>Endereço SEDE: *</label>
        <Input
          ref={register(requiredMessage)}
          name="address"
          // errorMessage={errorMessageFor('address', errors)}
          type="text"
          placeHolder="R. XV de Novembro, 2120"
        />
        <label>Email: *</label>
        <Input
          ref={register(requiredMessage)}
          name="email"
          // errorMessage={errorMessageFor('email', errors)}
          type="text"
          placeHolder="example@email.com"
        />
        <label>Taxa de Juros: *</label>
        <Input
          ref={register(requiredMessage)}
          name="interest_rate"
          // errorMessage={errorMessageFor('interest_rate', errors)}
          type="text"
          placeHolder="0%"
        />
        <Button className="btn-signup radius-form" type="submit">Cadastrar</Button>
      </form>
      <Button className="btn-position radius-form" kind="second" url="/AdminHome">Voltar</Button>
    </div>
  );
};
