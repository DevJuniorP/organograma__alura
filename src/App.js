import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="Nome" placeholder='Digite seu  Nome'/>
      <CampoTexto label="Cargo" placeholder='Digite seu  Cargo'/>
      <CampoTexto label="Imagem" placeholder='Digite o Endereço da Imagem'/>
    </div>
  );
}

export default App;
