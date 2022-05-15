import React from "react";
import './CardPequeno.css'

function CardPequeno(props) {
    <div className="small-card">
        <div className="email">
            <img src={ props.imagem }/>
            <p><h4><strong>Email:</strong></h4>{ props.emailDescricao }</p>
        </div>
        <div className="endereco">
            <img src={ props.imagem }/>
            <p><h4><strong>Endereço:</strong></h4>{ props.enderecoDescricao }</p>
        </div>
    </div>
}

export default CardPequeno;