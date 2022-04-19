import { useState } from 'react';
import './formularioCadastro.css'

export default function FormularioCadastro ({ criarNota }) {

    const onSubmit = (evento) => {
        evento.preventDefault()
        
        criarNota(titulo , texto)
    }

    let titulo;
    let texto;

    function titleHandler(evento) {
        evento.preventDefault()
        return titulo = evento.target.value
    }

    function textHandler(evento) {
        evento.preventDefault()
        return texto = evento.target.value
    }

    return (

    <form
     className='form-cadastro'
     onSubmit={ onSubmit }
     >
        <input
            className='form-cadastro_input'
            placeholder="input"
            onChange={ titleHandler }
        />

        <textarea
         placeholder="Escreva sua nota"
         rows={15}
         onChange={ textHandler }
        />

        <button
            className='form-cadastro_submit form-cadastro_textarea'
        > Criar Nota </button>

    </form>
    )
}