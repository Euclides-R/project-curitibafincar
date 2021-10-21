import React, { useState } from 'react';

import { Button } from '../../components';

export default function ProposalsReceived(){
    return(
        <div className="show-box radius-form">
            <h1 className="title-page">Propostas pendentes de aprovação</h1>
            <div className="pending">
                <p>
                    Entra os conteúdos de propostas 
                </p>
            </div>
        </div>
    )
}
