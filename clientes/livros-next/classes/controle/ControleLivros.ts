import Livro from "../modelo/Livro";

const baseUrl = "http://localhost:3030/livros";

interface LivroMongo {
    _id: String | null
    codEditora: number
    titulo: String
    resumo: String
    autores: String[]
}

class ControleLivros {
    async obterLivros() {
        const responsta = await fetch(baseUrl, {method: "GET",});
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
        const respota = await fetch(baseUrl, {method: "POST", body: JSON.stringify(livro), headers: {"Content-Type": "application/json"}});
        return respota.ok;
    }

    async excluir(codigo: string) {
      const resposta = await fetch(`${baseUrl}/:${codigo}`, {method: "DELETE"});
      console.log(resposta);
      return resposta.ok;
    }
}

export default ControleLivros;