import './formularioCadastro.css'

export default function FormularioCadastro (props) {
    
    let titulo;
    let texto;

    function titleHandler(evento) {
        titulo = evento.target.value
    }

    function textHandler(evento) {
        texto = evento.target.value
    }

    return (

    <form
     className='form-cadastro'
     onSubmit={ criarNota }
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