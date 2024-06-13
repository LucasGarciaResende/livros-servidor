import type {NextPage} from 'next'; 
import styles from '../styles/Home.module.css'
import Livro from  '../classes/modelo/Livro';
import {useState} from 'react';
import {useRouter} from 'next/router';
import ControleEditora from '../classes/controle/ControleEditora';
import ControleLivros from '../classes/controle/ControleLivros';
import {Menu} from '../componentes/Menu'
import Head from 'next/head';


const LivroDados: NextPage = () => {
    let controleLivro = new ControleLivros();
    let controleEditora = new ControleEditora();
    let Router = useRouter();
    let opcoes = controleEditora.getEditoras().map(editora => ({value: editora.codEditora, text: editora.nome}));
    let [titulo, setTitulo] = useState('');
    let [resumo, setResumo] = useState('');
    let [autores, setAutores] = useState('');
    let [codEditora, setCodEditora] = useState(opcoes[0].value);
    let tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(event.target.value));
    }
    let incluir = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const livro: Livro = {
            codigo: "",
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'),
            codEditora: codEditora,
        };
        const incluindo = await controleLivro.incluir(livro);
        if (incluindo) Router.push('/LivroLista');
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu />
            <main>
                <h1>Dados do Livros</h1>
                <form onSubmit={incluir}>
                     <div className="form-group">
                        <label htmlFor="titulo">Título:</label>
                        <input type="text" className="form-control" onChange={(event) => setTitulo(event.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="resumo">Resumo:</label>
                        <textarea cols={30} rows={3} onChange={(event) => setResumo(event.target.value)} className="form-control"></textarea>   
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
                        <textarea cols={30} rows={3} onChange={(event) => setAutores(event.target.value)} className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className='botao'>Salvar Dados</button>
                    </div>
                </form>
            </main>
        </div>
    )
};

export default LivroDados;




