import Header from "./components/Header/index"
import Image from "./components/Imagem/index"
import Tabela from "./components/Tabela";

function App() {
  return (
    <div className="container-fluid bg-dark text-white text-center p-3">
      <Header title="Cadastro de Usuário" />
      <Header title="Marques" />
      <Image />
      <Tabela />
    </div>
  );
}

export default App
