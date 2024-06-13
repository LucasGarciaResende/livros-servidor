var Livro = require("./livro-schema");

obterLivros = () => {
    return Livro.find();
}

incluir = (livro) => {
    Livro.create(livro);
}

excluir = (codigo) => {
    Livro.deleteOne({_id: codigo});
}

module.exports = {obterLivros, incluir, excluir};