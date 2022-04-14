import CardNota from "../CardNota/cardNota";
import './listaDeNotas.css'

function ListaDeNotas() {
    return(
        <ul className="lista-notas">
            <li className="lista-notas_item">
                <CardNota/>
            </li>
        </ul>
    )
}

export default ListaDeNotas;