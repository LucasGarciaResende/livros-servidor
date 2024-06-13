var { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

var express = require('express');

var router = express.Router();

router.get('/', function(req, res, next) {
    obterLivros().then(livros => {
        res.json(livros.map(livro => livro.toObject()));
    }).catch(next);
}); 

router.post('/', function(req, res, next) {
    incluir(req.body).then(livro => {
        res.json(livro.toObject());
    }).catch(next);
});

router.delete('/:codigo', function(req, res, next) {
    excluir(req.params.codigo).then(livro => {
      res.json(livro.toObject());
    }).catch(next);
  });

module.exports = router;
