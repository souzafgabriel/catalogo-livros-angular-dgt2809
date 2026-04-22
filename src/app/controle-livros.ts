import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Array<Livro> = [
    new Livro(
      1,
      1,
      'Use a Cabeça: Java',
      'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      ['Bert Bates', 'Kathy Sierra']
    ),
    new Livro(
      2,
      2,
      'Java, como Programar',
      'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      ['Paul Deitel', 'Harvey Deitel']
    ),
    new Livro(
      3,
      3,
      'Engenharia de Software',
      'Um livro voltado aos fundamentos e práticas da engenharia de software.',
      ['Ian Sommerville']
    )
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir = (livro: Livro): void => {
    const maiorCodigo = this.livros.reduce((maior, item) => {
      return item.codigo > maior ? item.codigo : maior;
    }, 0);

    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  };

  excluir = (codigo: number): void => {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);

    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  };
}