import './CardNota.css'

export default function CardNota({titulo, texto}) {
    return (
        <section className='card-nota'>
             <header className='card-nota_cabecalho'>
                <h3 className='card-nota_titulo'> { titulo } </h3>
            </header>
            <p className='card-nota_texto'> { texto } </p>
        </section>
    )
}