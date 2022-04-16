import './assets/App.css'

import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro'
import { useState } from 'react'

function App() {

  const [notas, setNotas] = useState([])

  const criarNota = (titulo, texto) => {

    const novaNota = [titulo,texto]

    notas.push(novaNota)

    console.log(notas)
  }

  return (
    <div className='App'>
      <FormularioCadastro criarNota={ criarNota } />
      <ListaDeNotas notas = { notas } />
    </div>
  );
}

export default App;
