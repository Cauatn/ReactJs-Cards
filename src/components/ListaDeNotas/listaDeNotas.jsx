import { useEffect, useState } from "react";
import './listaDeNotas.css'
import CardNota from '../CardNota/cardNota'

function ListaDeNotas( { listaDeNotas } ) {

    const data = listaDeNotas;

    useEffect(()=>{
        console.log('novo valor')
    },[data])

    function mostrarNotas() {
        console.log(data)
    }

    return (
        <ul className="lista-notas">
            { mostrarNotas() }
        </ul>
    )
}

export default ListaDeNotas;