import Editora from "../modelo/Editora";

var editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Alta Books'}, 
    {codEditora: 2, nome: 'Pearson'}, 
    {codEditora: 3, nome: 'Addison Wesley'},
];

class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }
    getNomeEditora(codEditora: number): string {
        return editoras.filter(editora => editora.codEditora === codEditora)[0].nome
    }
}

export default ControleEditora;