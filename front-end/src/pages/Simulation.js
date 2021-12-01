import React, { useState, useEffect, useContext } from "react";

import { Input, Button, Select } from "../components";
import { AuthContext } from "../hooks/auth";
import { ContractService } from "../services";
import CompanyService from "../services/Company";

export default function Home() {
  // const [cpf, setCpf] = useState();
  const {
    user
  } = useContext(AuthContext);

  const [financial, setFinancial] = useState("");
  const [typeContract, setTypeContract] = useState("");
  const [value, setValue] = useState();
  const [parcel, setParcel] = useState("");

  const [data, setData] = useState([]);
  useEffect(() => {
    async function execute() {
      const { data } = await CompanyService().getCompanies();
      setData(data);
    }
    execute();
  }, [setData]);

  if (!data.length) {
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // if ( !financial || !typeContract || !value || !parcel ) {
    //   alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    //   return
    // }
    console.log(financial);

    try {
      const company = data.find((company) => company.name === financial);
      await ContractService().addNewContract({
        user_id: user.id,
        company_id: company.id,
        type_contract: typeContract,
        value,
        amount_times: parcel,
      });
      alert("SIMULAÇÃO SOLICITADA, ASSIM QUE APROVADA IRÁ RECEBER UM EMAIL");
    } catch (error) {
      alert("ERRO NA SOLICITAÇÃO DE SIMULAÇÃO");
      console.log(error);
    }
  }

  return (
    <div className="show-box radius-form">
      <h1 className="title-page"> Simulação de Financiamento </h1>
      <form onSubmit={handleSubmit} className="simulation-box text-size">
        <p>C.P.F: *</p>
        <Input value={user.cpf} type="text" placeHolder={user.cpf} disabled />
        <p>Financeira: *</p>
        <Select
          value={financial}
          onChange={(e) => {
            setFinancial(e.target.value)
          }}
        >
          {data.map((cont, i) => {
            return <option value={cont.name}>{cont.name}</option>;
          })}
        </Select>
        <p>Tipo de simulação: *</p>
        <Input
          value={typeContract}
          onChange={(e) => {
            setTypeContract(e.target.value);
          }}
          type="test"
          placeHolder="EMPRÉSTIMO"
        />
        <p>Valor: *</p>
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="number"
          placeHolder="R$ 12.345,56"
        />
        <p>Parcelas: *</p>
        <Input
          value={parcel}
          onChange={(e) => {
            setParcel(e.target.value);
          }}
          type="number"
          placeHolder="x12"
        />
        <Button className="login-button radius-form">Enviar</Button>
      </form>
    </div>
  );
}
