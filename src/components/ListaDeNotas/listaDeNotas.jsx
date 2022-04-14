import CardNota from "../CardNota/cardNota";
import './listaDeNotas.css'

function ListaDeNotas() {
    return(
        <ul>
            <li className="lista-notas">
                <CardNota className='lista-notas_item'/>
                <CardNota className='lista-notas_item'/>
                <CardNota className='lista-notas_item'/>
                <CardNota className='lista-notas_item'/>
            </li>
        </ul>
    )
}

export default ListaDeNotas;