const database = "Lojaweb";
const collection = "Produto";

use(database);

db.getCollection(collection).find({codigo: 2},{descricao:1, quantidade:1, _id:0});
  