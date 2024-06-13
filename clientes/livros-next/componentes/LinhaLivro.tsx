import ControleEditora from "@/classes/controle/ControleEditora";
import Livro from "@/classes/modelo/Livro";
import ControleLivros from "@/classes/controle/ControleLivros";
import {useEffect, useState} from "react";



var controleEditora: ControleEditora = new ControleEditora();
var controleLivro: ControleLivros = new ControleLivros();

interface LinhaLivroProps {
    livro: Livro;

    excluir: (codigo: number) => void;
  }

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { 
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);
    useEffect(() => {
    controleLivro.obterLivros().then((livros) => {
            setLivros(livros);
            setCarregado(true);
        });
    }, [controleLivro]);

    const excluir = (codigo: number) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };
    let nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);
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
};