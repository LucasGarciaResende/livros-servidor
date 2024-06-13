import { useEffect, useState } from "react";
import ControleEditora from "./controle/ControleEditora";
import ControleLivros from "./controle/ControleLivros";

function LivroLista() {
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
  
  useEffect(() => {
    const obterTodos = async () => {
      const livros = await controleLivros.obterLivros().then((livros) => {
        setLivros(livros);
        setCarregado(true);
      });
    };
    obterTodos();
  }, [controleLivros]);

  const excluir = async (codigo) => {
    await controleLivros.excluir(codigo);
    setCarregado(false);
  };
  
  return (
    <main>
      <div className="container">
        <h1>Catalogo de Livros</h1>
        <table>
          <thead className="cabecalho">
            <tr>
              <th className="titulos">Título</th>
              <th className="titulos">Resumo</th>
              <th className="titulos">Editora</th>
              <th className="titulos">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro, index) => (
              <LinhaLivro
                key={index}
                livro={livro}
                controleLivros={controleLivros}
                controleEditora={controleEditora}
                excluir={excluir}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default LivroLista;

function LinhaLivro(props) {
  let nomeEditora = props.controleEditora.getNomeEditora(props.livro.codEditora);
  return (
    <tr className="item">
      <td>
        {props.livro.titulo}
        <br />
        <button onClick={() => props.excluir(props.livro.codigo)} className="botao">
          Excluir
        </button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {props.livro.autores.map((autor) => (
            <li key={autor}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}