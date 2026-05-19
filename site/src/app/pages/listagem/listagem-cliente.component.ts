import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/types/types';

@Component({
  selector: 'app-listagem-cliente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="content-container">
      <h2>Clientes</h2>

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
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            @for (c of lista; track c) {
            <tr>
              <td>{{ c.id }}</td>
              <td>{{ c.nome }}</td>
              <td>{{ c.email }}</td>
              <td>{{ c.telefone }}</td>
              <td>{{ c.endereco }}</td>
              <td class="acoes">
                <button class="btn-editar" [routerLink]="['/clientes/alterar', c.id]">Editar</button>
                <button class="btn-excluir" (click)="excluir(c.id!)">Excluir</button>
              </td>
            </tr>
            } @empty {
            <tr>
              <td colspan="6" class="vazio">Nenhum cliente cadastrado.</td>
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
    thead tr { background: #059669; color: #fff; }
    th, td { padding: 12px 16px; text-align: left; }
    th { font-weight: 600; font-size: .8rem; text-transform: uppercase; letter-spacing: .04em; }
    tbody tr { border-bottom: 1px solid #f1f5f9; }
    tbody tr:hover { background: #f8fafc; }
    .acoes { display: flex; gap: 8px; }
    td button { padding: 7px 16px; font-size: .8rem; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; transition: all .2s; }
    .btn-editar { background: #e2e8f0; color: #475569; }
    .btn-editar:hover { background: #059669; color: #fff; }
    .btn-excluir { background: #e2e8f0; color: #475569; }
    .btn-excluir:hover { background: #dc2626; color: #fff; }
    .vazio { text-align: center; color: #94a3b8; font-style: italic; padding: 32px 16px !important; }
    .erro { padding: 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #dc2626; font-size: .9rem; margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .btn-rec { padding: 6px 14px; background: #dc2626; color: #fff; border: none; border-radius: 6px; font-size: .8rem; font-weight: 600; cursor: pointer; white-space: nowrap; }
  `]
})
export class ListagemClienteComponent implements OnInit {
  lista: Cliente[] = [];
  erro = '';
  constructor(private service: ClientesService) {}
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
      next: () => this.lista = this.lista.filter(c => c.id !== id),
      error: () => this.erro = 'Erro ao excluir. Verifique o backend.'
    });
  }
}
