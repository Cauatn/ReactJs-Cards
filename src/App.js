import './assets/App.css'

import ListaDeNotas from './components/ListaDeNotas/listaDeNotas'
import FormularioCadastro from './components/FormularioCadastro/formularioCadastro'
import CardNota from './components/CardNota/cardNota';

function App() {
  return (
    <div className='App'>
      <FormularioCadastro />
      <ListaDeNotas />
    </div>
  );
}

export default App;
