var banco = require("./conexao");

const LivrosSchema = new banco.Schema({
    _id: {type: banco.Schema.Types.ObjectId},
    titulo: {type: String},
    codEditora: {type: Number},
    resumo: {type: String},
    autores: {type: [String]}
});

const Livro = banco.model("livro", LivrosSchema);

module.exports = Livro;