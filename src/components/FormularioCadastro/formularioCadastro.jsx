import './formularioCadastro.css'

export default function FormularioCadastro () {
    return (
    <form className='form-cadastro'>
        <input
            className='form-cadastro_input'
            placeholder="input" />
        <textarea placeholder="Escreva sua nota" />
        <button
            className='form-cadastro_submit form-cadastro_textarea'
        > Criar Nota </button>
    </form>
    )
}