import type {NextPage} from 'next';
import React from 'react';
import styles from '../styles/Home.module.css'
import Livro from  '../classes/modelo/Livro';
import {useEffect, useState} from 'react';
import {Menu} from '../componentes/Menu';
import {LinhaLivro} from '../componentes/LinhaLivro';
import Head from 'next/head';
import ControleLivros from '../classes/controle/ControleLivros';

const controleLivros = new ControleLivros();

const LivroLista: NextPage = () => {
    let [livros, setLivros] = useState<Livro[]>([]);
    let [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const obterTodos = async () => {
            const result = await controleLivros.obterLivros();
            const updatedLivros = result.map((livro) => ({
                ...livro,
                codigo: livro._id, // Assuming the _id property is the codigo
            }));
            setLivros(updatedLivros);
            setCarregado(true);
        };

        obterTodos();
    }, []);


    
    const excluir = async (codigo: number) => {
        await controleLivros.excluir(codigo.toString()).then(() => {
            setCarregado(false);
        })
    };

    return (
        <div className={styles.container} suppressHydrationWarning>
          <Head>
            <title>Loja Next</title>
          </Head>
          <Menu />
          <main>
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
                    {Array.isArray(livros) && livros.map((livro, index) => (
                        <LinhaLivro
                            key={index}
                            livro={livro}
                            excluir={excluir} 
                        />
                    ))}
                </tbody>
            </table>
          </main>
        </div>
      );
    };

export default LivroLista;
