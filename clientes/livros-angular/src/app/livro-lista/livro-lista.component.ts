import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  
  constructor( 
    private servEditora: ControleEditoraService, 
    private servLivro: ControleLivrosService
  ) {}

  ngOnInit(){
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivro.obterLivros().then((livros) => this.livros = livros);
  }

  public excluir = (codigo: string) => {
    this.servLivro.excluir(codigo).then(
      () => this.livros = this.servLivro.obterLivros().then((livros) => this.livros = livros)
    )
    t
  }

  public obterNome = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
