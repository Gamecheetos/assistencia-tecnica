import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from '../../core/services/clientes.service';
import { Cliente } from '../../core/types/types';

@Component({
  selector: 'app-alterar-cliente',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="form-container">
      <h2>Alterar Cliente</h2>
      <form>
        <label>Nome</label>
        <input class="input-simples" [(ngModel)]="item.nome" name="nome" />

        <label>Email</label>
        <input class="input-simples" [(ngModel)]="item.email" name="email" />

        <label>Telefone</label>
        <input class="input-simples" [(ngModel)]="item.telefone" name="telefone" />

        <label>Endereço</label>
        <input class="input-simples" [(ngModel)]="item.endereco" name="endereco" />

        <button class="input-submeter" (click)="salvar()">Salvar</button>
      </form>
    </div>
  `,
  styles: [`
    .form-container { max-width: 480px; margin: 48px auto; padding: 32px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 1px 3px rgba(0,0,0,.06); }
    h2 { color: #0f172a; font-size: 1.35rem; font-weight: 700; margin-bottom: 24px; }
    form label { display: block; margin-bottom: 4px; font-size: .85rem; font-weight: 600; color: #475569; }
    .input-simples { width: 100%; padding: 10px 12px; font-size: .9rem; margin-bottom: 16px; border: 1px solid #cbd5e1; border-radius: 8px; box-sizing: border-box; transition: border-color .2s; background: #f8fafc; }
    .input-simples:focus { border-color: #059669; outline: none; background: #fff; box-shadow: 0 0 0 3px rgba(5,150,105,.1); }
    .input-submeter { width: 100%; padding: 11px; margin-top: 8px; background: #059669; color: #fff; font-size: .9rem; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; transition: background .2s; }
    .input-submeter:hover { background: #047857; }
  `]
})
export class AlterarClienteComponent implements OnInit {
  item: Cliente = {} as Cliente;
  constructor(
    private service: ClientesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id')!;
    this.service.buscarPorId(idParam).subscribe(d => this.item = d);
  }
  salvar() {
    this.service.editar(this.item).subscribe(() => this.router.navigate(['/clientes']));
  }
}
