import React, { useState } from 'react';

import { Input, Button, Select } from '../components';

export default function Home(){

    const [financial, setFinancial] = useState('');
    const [value, setValue] = useState('');
    const [parcel, setParcel] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        
        console.log(financial, value, parcel);    
    }

    return(
        <div className='show-box radius-form'>
            <h1 className='title-page'> Simulação de Refinanciamento </h1>
            <form onSubmit={handleSubmit} className="simulation-box text-size">
                <p>Financeira:</p>
                    <Select
                        value={financial}
                        onChange={(e) => {setFinancial(e.target.value)}}
                        type="text"
                        placeHolder="Itaú"
                    >
                        <option value="itau">Itaú</option>
                        <option value="santander">Santander</option>
                        <option value="bradesco">Bradesco</option>
                        <option value="bbrasil">Banco do Brasil</option>
                    </Select>
                <p>Valor:</p>
                    <Input
                        value={value}
                        onChange={(e) => {setValue(e.target.value)}} 
                        type="number"
                        placeHolder="R$ 12.345,56"
                    />
                <p>Parcelas:</p>
                    <Input
                        value={value}
                        onChange={(e) => {setValue(e.target.value)}} 
                        type="number"
                        placeHolder="x12"
                    />
                <Button className="login-button radius-form">Enviar</Button>
            </form>
        </div>
    );
};
