import './assets/App.css'

import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro, {criarNota} from './components/FormularioCadastro/formularioCadastro'
import CardNota from './components/CardNota/cardNota';

function App() {

  function criarNota (evento) {
    evento.preventDefault()
    console.log('oi')
}

  return (
    <div className='App'>
      <FormularioCadastro />
      <ListaDeNotas />
    </div>
  );
}

export default App;
