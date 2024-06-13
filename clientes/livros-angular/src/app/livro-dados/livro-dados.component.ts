import { Component} from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  constructor(
    private servEditora: ControleEditoraService,
    private servLivro: ControleLivrosService,
    private router: Router
    ) {}
  
  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }

  public incluir = () => {
    this.livro.codEditora = Number(this.livro.codEditora);
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivro.incluir(this.livro).then(() => {
      this.router.navigateByUrl('/');
    })
    
  }
}