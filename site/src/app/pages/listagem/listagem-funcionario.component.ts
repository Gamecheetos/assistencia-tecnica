import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FuncionariosService } from '../../core/services/funcionarios.service';
import { Funcionario } from '../../core/types/types';

@Component({
  selector: 'app-listagem-funcionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="content-container">
      <h2>Funcionários</h2>

      @if (erro) {
        <div class="erro">
          {{ erro }}
          <button class="btn-rec" (click)="carregar()">Recarregar</button>
        </div>
      }

      @if (!erro) {
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            @for (f of lista; track f) {
            <tr>
              <td>{{ f.id }}</td>
              <td>{{ f.nome }}</td>
              <td>{{ f.cargo }}</td>
              <td>{{ f.telefone }}</td>
              <td>{{ f.email }}</td>
              <td class="acoes">
                <button class="btn-editar" [routerLink]="['/funcionarios/alterar', f.id]">Editar</button>
                <button class="btn-excluir" (click)="excluir(f.id!)">Excluir</button>
              </td>
            </tr>
            } @empty {
            <tr>
              <td colspan="6" class="vazio">Nenhum funcionário cadastrado.</td>
            </tr>
            }
          </tbody>
        </table>
      }
    </div>
  `,
  styles: [`
    .content-container { max-width: 1000px; margin: 40px auto; padding: 24px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.06); overflow-x: auto; }
    h2 { color: #0f172a; font-size: 1.35rem; font-weight: 700; margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; font-size: .9rem; }
    thead tr { background: #2563eb; color: #fff; }
    th, td { padding: 12px 16px; text-align: left; }
    th { font-weight: 600; font-size: .8rem; text-transform: uppercase; letter-spacing: .04em; }
    tbody tr { border-bottom: 1px solid #f1f5f9; }
    tbody tr:hover { background: #f8fafc; }
    .acoes { display: flex; gap: 8px; }
    td button { padding: 7px 16px; font-size: .8rem; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: all .2s; }
    .btn-editar { background: #e2e8f0; color: #475569; }
    .btn-editar:hover { background: #2563eb; color: #fff; }
    .btn-excluir { background: #e2e8f0; color: #475569; }
    .btn-excluir:hover { background: #dc2626; color: #fff; }
    .vazio { text-align: center; color: #94a3b8; font-style: italic; padding: 32px 16px !important; }
    .erro { padding: 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #dc2626; font-size: .9rem; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .btn-rec { padding: 6px 14px; background: #dc2626; color: #fff; border: none; border-radius: 6px; font-size: .8rem; font-weight: 600; cursor: pointer; white-space: nowrap; }
  `]
})
export class ListagemFuncionarioComponent implements OnInit {
  lista: Funcionario[] = [];
  erro = '';
  constructor(private service: FuncionariosService) {}
  ngOnInit() { this.carregar(); }
  carregar() {
    this.erro = '';
    this.service.listar().subscribe({
      next: d => this.lista = d,
      error: () => this.erro = 'Erro ao conectar ao servidor. Certifique-se de que o backend está rodando (npm run backend).'
    });
  }
  excluir(id: number | string) {
    if (id) this.service.excluir(id).subscribe({
      next: () => this.lista = this.lista.filter(f => f.id !== id),
      error: () => this.erro = 'Erro ao excluir. Verifique o backend.'
    });
  }
}
