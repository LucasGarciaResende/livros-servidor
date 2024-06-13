import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { LivroMongo } from './livro-mongo-interface';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseUrl = "http://localhost:3030/livros";

  
  async obterLivros() {
    const responsta = await fetch(this.baseUrl, {method: "GET",});
    const livros: Livro[] = await responsta.json();
    return livros.map((livro) => ({
      _id: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    }));
  }

  async incluir(livro: LivroMongo) {
    const respota = await fetch(this.baseUrl, {method: "POST", body: JSON.stringify(livro), headers: {"Content-Type": "application/json"}});
    return respota.ok;
  }

  async excluir(codigo: string) {
    const resposta = await fetch(`${this.baseUrl}/:${codigo}`, {method: "DELETE"});
    console.log(resposta);
    return resposta.ok;
  }

  constructor() { }
}