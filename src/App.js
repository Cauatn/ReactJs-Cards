import './assets/App.css'

import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro'
import { useEffect, useState } from 'react'

function App() {

  const [listaNotas, setLista] = useState([])

  const criarNota = (titulo, texto) => {

    const novaNota = {
      titulo : titulo,
      texto : texto
    }

    listaNotas.push(novaNota)

  }

  return (
    <div className='App'>
      <FormularioCadastro criarNota={ criarNota } />
      <ListaDeNotas notas = { listaNotas } />
    </div>
  );
}

export default App;
