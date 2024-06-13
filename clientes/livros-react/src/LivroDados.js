import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ControleEditora from "./controle/ControleEditora";
import ControleLivros from "./controle/ControleLivros";

function LivroDados() {
    let controleLivro = new ControleLivros();
    let controleEditora = new ControleEditora();
    let opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora, text: editora.nome}));
    let [titulo, setTitulo] = useState('');
    let [resumo, setResumo] = useState('');
    let [autores, setAutores] = useState('');
    let [codEditora, setCodEditora] = useState(opcoes[0].value);
    let navigate = useNavigate();
    let tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    }
    let incluir = (event) => {
        event.preventDefault();
        let livro = {
            _id: null,
            codigo: "",
            titulo,
            resumo,
            codEditora,
            autores: autores.split("\n")
        }
        controleLivro.incluir(livro).then(() => {
            navigate("/");
        });
    }
    return (
        <main>
            <div className="container">
                <h1>Dados do Livros</h1>
                <form onSubmit={incluir}>
                     <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" className="form-control" onChange={(event) => setTitulo(event.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea cols="30" rows="3" onChange={(event) => setResumo(event.target.value)} className="form-control"></textarea>   
                    </div>
                    <div className="form-group">
                        <label htmlFor="codEditora">Editora:</label>
                        <select
                            id="codEditora"
                            className="form-control"
                            value={codEditora}
                            onChange={tratarCombo}
                        >
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="autores">Autores:</label>
                        <textarea cols="30" rows="3" onChange={(event) => setAutores(event.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="botao">Salvar Dados</button>
                    </div>
                </form>
            </div>
        </main>
    )
};

export default LivroDados;