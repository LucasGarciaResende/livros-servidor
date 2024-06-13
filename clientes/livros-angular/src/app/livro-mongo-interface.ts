export interface LivroMongo {
    _id?: String | null;
    codEditora: number;
    titulo: String;
    resumo: String;
    autores: String[];
  }
