import './CardNota.css'

export default function CardNota({categoria}) {
    return (
        <section className='card-nota'>
             <header className='card-nota_cabecalho'>
                <h3 className='card-nota_titulo'> { categoria } </h3>
            </header>
            <p className='card-nota_texto'>Escreva sua nota</p>
        </section>
    )
}