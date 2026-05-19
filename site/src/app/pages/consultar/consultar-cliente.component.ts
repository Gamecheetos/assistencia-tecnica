import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/types/types';

@Component({
  selector: 'app-consultar-cliente',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="consulta-container">
      <h2>Consultar Cliente</h2>
      <form (ngSubmit)="buscar()">
        <label>Informe o ID do Cliente:</label>
        <input type="number" [(ngModel)]="idBusca" name="idBusca" class="input-id" required />
        <button type="submit" class="btn-buscar">Buscar</button>
      </form>
      <div *ngIf="encontrado" class="dados">
        <h3>Dados do Cliente</h3>
        <p><strong>ID:</strong> {{ encontrado.id }}</p>
        <p><strong>Nome:</strong> {{ encontrado.nome }}</p>
        <p><strong>Email:</strong> {{ encontrado.email }}</p>
        <p><strong>Telefone:</strong> {{ encontrado.telefone }}</p>
        <p><strong>Endereço:</strong> {{ encontrado.endereco }}</p>
      </div>
      <div *ngIf="erro" class="erro">{{ erro }}</div>
    </div>
  `,
  styles: [`
    .consulta-container { max-width: 480px; margin: 48px auto; padding: 32px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
    h2 { color: #0f172a; font-size: 1.35rem; font-weight: 700; margin-bottom: 20px; }
    h3 { color: #0f172a; font-size: 1rem; font-weight: 700; margin-bottom: 16px; }
    form { display: flex; flex-direction: column; gap: 4px; }
    form label { font-size: .85rem; font-weight: 600; color: #475569; }
    .input-id { padding: 10px 12px; margin: 4px 0 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: .9rem; background: #f8fafc; transition: border-color .2s; }
    .input-id:focus { border-color: #059669; outline: none; background: #fff; box-shadow: 0 0 0 3px rgba(5,150,105,.1); }
    .btn-buscar { padding: 11px; background: #059669; color: #fff; font-weight: 600; font-size: .9rem; border: none; border-radius: 8px; cursor: pointer; transition: background .2s; }
    .btn-buscar:hover { background: #047857; }
    .dados { margin-top: 24px; padding: 20px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; }
    .dados p { font-size: .9rem; color: #334155; margin-bottom: 8px; }
    .dados p:last-child { margin-bottom: 0; }
    .dados strong { color: #0f172a; }
    .erro { margin-top: 16px; color: #dc2626; font-weight: 600; font-size: .9rem; }
  `]
})
export class ConsultarClienteComponent {
  idBusca?: number;
  encontrado?: Cliente;
  erro = '';
  constructor(private service: ClientesService) {}
  buscar() {
    if (!this.idBusca) return;
    this.erro = '';
    this.encontrado = undefined;
    this.service.buscarPorId(this.idBusca).subscribe({
      next: d => this.encontrado = d,
      error: () => this.erro = 'Cliente não encontrado.'
    });
  }
}
