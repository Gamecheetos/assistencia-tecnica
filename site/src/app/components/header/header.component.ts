import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="header">
      <div class="header-inner">
        <a routerLink="/" class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <span>Assistência <span class="accent">Técnica</span></span>
        </a>
        <nav class="nav">
          <div class="dropdown">
            <a class="nav-link">Funcionários</a>
            <div class="dropdown-content">
              <a routerLink="/funcionarios" routerLinkActive="active">Listar</a>
              <a routerLink="/funcionarios/cadastrar" routerLinkActive="active">Cadastrar</a>
              <a routerLink="/funcionarios/consultar" routerLinkActive="active">Consultar</a>
            </div>
          </div>
          <div class="dropdown">
            <a class="nav-link">Clientes</a>
            <div class="dropdown-content">
              <a routerLink="/clientes" routerLinkActive="active">Listar</a>
              <a routerLink="/clientes/cadastrar" routerLinkActive="active">Cadastrar</a>
              <a routerLink="/clientes/consultar" routerLinkActive="active">Consultar</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    .header {
      background: #0f172a;
      border-bottom: 1px solid #1e293b;
    }
    .header-inner {
      max-width: 1120px; margin: 0 auto; padding: 0 24px;
      display: flex; align-items: center; justify-content: space-between;
      height: 56px;
    }
    .logo {
      display: flex; align-items: center; gap: 8px;
      text-decoration: none; color: #f8fafc;
      font-size: 1.1rem; font-weight: 700;
    }
    .accent { color: #f97316; }
    .nav { display: flex; gap: 2px; }
    .nav-link {
      padding: 8px 16px;
      color: #94a3b8; text-decoration: none;
      font-size: .9rem; font-weight: 500;
      border-radius: 6px; cursor: pointer;
    }
    .nav-link:hover { color: #f8fafc; background: rgba(255,255,255,.06); }
    .dropdown { position: relative; }
    .dropdown-content {
      display: none;
      position: absolute; top: 100%; left: 0;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 8px;
      min-width: 170px;
      padding: 6px;
      box-shadow: 0 12px 32px rgba(0,0,0,.3);
    }
    .dropdown-content a {
      display: block;
      padding: 9px 14px;
      color: #cbd5e1; text-decoration: none;
      font-size: .85rem; border-radius: 6px;
    }
    .dropdown-content a:hover { background: #334155; color: #f8fafc; }
    .dropdown-content a.active { color: #f97316; background: rgba(249,115,22,.1); }
    .dropdown:hover .dropdown-content { display: block; }
  `]
})
export class HeaderComponent {}
