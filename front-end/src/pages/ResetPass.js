import React, { useState } from "react";
import { UserService } from "../services";

import { Input, Button } from "../components";

export default function Home() {
  const [cpf, setCpf] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassWord] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // if ( !financial || !typeContract || !value || !parcel ) {
    //   alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    //   return
    // }

    try {
      await UserService().resetPasswordUser({ cpf, password: oldPassword, newPassword });
      alert("SENHA ALTERADA COM SUCESSO!!!");
    } catch (error) {
      alert("SENHA, NÃO ALTERA");
      console.log(error);
    }
  }

  return (
    <div className="show-box radius-form">
      <h1 className="title-page">Recuperar senha</h1>
      <form onSubmit={handleSubmit} className="text-size">
        <p>CPF:</p>
        <Input
          value={cpf}
          onChange={(e) => {
            setCpf(e.target.value);
          }}
          type="text"
          placeHolder="111.222.333-44"
        />
        <p>Senha Antiga:</p>
        <Input
          value={oldPassword}
          onChange={(e) => {
            setOldPassWord(e.target.value);
          }}
          type="password"
          placeHolder="Digite novamente sua senha"
        />
        <p>Nova Senha:</p>
        <Input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="text"
          placeHolder="Digite novamente sua senha"
        />
        <Button className="btn-rp radius-form">Confirmar</Button>
      </form>
      <div className="other-options">
        <p>
          <a href="/">⬅ Voltar</a>
        </p>
      </div>
    </div>
  );
}
