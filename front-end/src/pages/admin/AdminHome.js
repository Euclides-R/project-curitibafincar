import React from "react";
import { Button } from "../../components";

export default function AdminHome() {
    return(
        <div className='show-box radius-form'>
            <h1 className='title-page'>Bem vindo, Administrador!!!</h1>
            <div className="admin-home">
                <Button className="radius-form" kind="second" url="/allproposals">Todas as Propostas recebidas</Button>
                <Button className="radius-form" kind="second" url="/Companies">Financiadoras</Button>
                <Button className="radius-form" kind="second" url="/newcom">Cadastrar nova Financiadora</Button>
                <Button className="radius-form" kind="second" url="/proposalsreceived">Propostas recebidas</Button>
            </div>
        </div>
    )
}
