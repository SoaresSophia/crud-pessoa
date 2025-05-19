import { Injectable } from '@angular/core';
import { Pessoa } from '../shared/models/pessoa.model';

const CHAVE_LOCAL_STORAGE = 'pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[CHAVE_LOCAL_STORAGE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    const pessoas = this.listarTodos();
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[CHAVE_LOCAL_STORAGE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarTodos();
    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodos();
    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa;
      }
    })
    localStorage[CHAVE_LOCAL_STORAGE] = JSON.stringify(pessoas);
  }

  remover(id: number): void {
    let pessoas = this.listarTodos();
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage[CHAVE_LOCAL_STORAGE] = JSON.stringify(pessoas);
  }

}
