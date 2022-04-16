import './assets/App.css'

import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro'
import CardNota from './components/CardNota/cardNota';

function App() {

  const criarNota = (titulo, texto) => {
    return (
      <div></div>
    )
  }

  return (
    <div className='App'>
      <FormularioCadastro criarNota={ criarNota } />
      <ListaDeNotas />
    </div>
  );
}

export default App;
