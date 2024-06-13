import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Array<Editora> = [
    {codEditora: 1, nome: 'Altabooks'},
    {codEditora: 2, nome: 'Pearson'},
    {codEditora: 3, nome: 'Addison Wesley'},
  ]

  getNomeEditora (codEditora: number): string {
    return this.editoras.filter(editora => editora.codEditora === codEditora)[0].nome
  }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  constructor() {}
}
