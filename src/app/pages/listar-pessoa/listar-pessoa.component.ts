import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-pessoa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css',
})
export class ListarPessoaComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[] {
    // return this.pessoaService.listarTodos();
    return [
      { id: 1, nome: 'João', idade: 25 },
      { id: 2, nome: 'Maria', idade: 30 },
      { id: 3, nome: 'José', idade: 35 },
    ];
  }
}
