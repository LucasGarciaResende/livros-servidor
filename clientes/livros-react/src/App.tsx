import LivroLista from "./LivroLista";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LivroDados from "./LivroDados";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-custom navbar-expand-lg menu">
        <a className="navbar-brand item-nav" href="/">Catálago</a>
        <a className="navbar-brand item-nav" href="data">Novo</a>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="data" element={<LivroDados />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

