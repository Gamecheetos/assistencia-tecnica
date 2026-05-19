import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="landing">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <div class="hero-icon">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <h1>Assistência Técnica</h1>
          <p class="hero-sub">Sistema completo de gerenciamento para sua oficina</p>
          <p class="hero-desc">Cadastre, consulte, altere e gerencie funcionários e clientes com facilidade.</p>
          <div class="hero-actions">
            <a class="btn-primary-lg" routerLink="/funcionarios">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Gerenciar Funcionários
            </a>
            <a class="btn-secondary-lg" routerLink="/clientes">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Gerenciar Clientes
            </a>
          </div>
        </div>
      </section>

      <!-- Services -->
      <section class="section">
        <div class="section-inner">
          <div class="section-header">
            <h2>Funcionalidades</h2>
            <p>Tudo que você precisa para gerenciar sua assistência técnica</p>
          </div>
          <div class="grid-3">
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Cadastro de Funcionários</h3>
              <p>Gerencie técnicos, atendentes e sua equipe com informações completas.</p>
            </div>
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h3>Cadastro de Clientes</h3>
              <p>Mantenha registros detalhados de clientes com endereço e contato.</p>
            </div>
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <h3>Consulta Rápida</h3>
              <p>Localize qualquer funcionário ou cliente pelo ID em segundos.</p>
            </div>
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <h3>Alteração de Dados</h3>
              <p>Atualize informações de funcionários e clientes de forma simples.</p>
            </div>
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
              </div>
              <h3>Exclusão Segura</h3>
              <p>Remova registros com confirmação e mantenha seu banco organizado.</p>
            </div>
            <div class="service-card">
              <div class="service-icon" style="background: rgba(59,130,246,.12);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </div>
              <h3>Listagem Organizada</h3>
              <p>Visualize todos os registros em tabelas limpas e de fácil navegação.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features -->
      <section class="section features">
        <div class="section-inner">
          <div class="section-header">
            <h2>Por que usar nosso sistema?</h2>
          </div>
          <div class="grid-3">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Simplicidade</h3>
              <p>Interface direta e intuitiva. Sem complicações, foco no que importa.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3>Segurança</h3>
              <p>Dados armazenados localmente com backup via json-server.</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>Rapidez</h3>
              <p>Consultas instantâneas. Localize qualquer registro em segundos.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="section cta">
        <div class="section-inner">
          <div class="cta-card">
            <h2>Pronto para começar?</h2>
            <p>Acesse o gerenciamento de funcionários ou clientes agora mesmo.</p>
            <div class="cta-actions">
              <a class="btn-cta" routerLink="/funcionarios">Funcionários</a>
              <a class="btn-cta" routerLink="/clientes">Clientes</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="section-inner">
          <div class="footer-grid">
            <div>
              <div class="footer-logo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <span>Assistência <span class="accent">Técnica</span></span>
              </div>
              <p class="footer-desc">Sistema de gerenciamento para assistências técnicas.</p>
            </div>
            <div>
              <h4>Navegação</h4>
              <a routerLink="/funcionarios">Funcionários</a>
              <a routerLink="/clientes">Clientes</a>
            </div>
            <div>
              <h4>Tecnologia</h4>
              <span>Angular 21</span>
              <span>json-server</span>
              <span>TypeScript</span>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Assistência Técnica. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  `,
  styles: [`
    .landing { width: 100%; }

    /* Hero */
    .hero { position: relative; overflow: hidden; padding: 80px 24px 100px; text-align: center; }
    .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,.08) 0%, transparent 70%); pointer-events: none; }
    .hero-content { position: relative; max-width: 720px; margin: 0 auto; }
    .hero-icon { margin-bottom: 24px; }
    h1 { font-size: 2.5rem; font-weight: 800; color: var(--text); margin-bottom: 12px; letter-spacing: -.02em; }
    .hero-sub { font-size: 1.15rem; color: var(--text-muted); margin-bottom: 8px; }
    .hero-desc { font-size: .95rem; color: var(--text-muted); opacity: .8; margin-bottom: 36px; }
    .hero-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
    .btn-primary-lg, .btn-secondary-lg { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; font-size: .95rem; font-weight: 600; border-radius: 10px; text-decoration: none; transition: all .15s; }
    .btn-primary-lg { background: var(--primary); color: #fff; }
    .btn-primary-lg:hover { background: var(--primary-hover); color: #fff; transform: translateY(-1px); }
    .btn-secondary-lg { background: var(--surface); border: 1px solid var(--border); color: var(--text); }
    .btn-secondary-lg:hover { border-color: var(--primary); color: var(--primary); transform: translateY(-1px); }

    /* Sections */
    .section { padding: 80px 24px; }
    .section:nth-child(even) { background: var(--surface); }
    .section-inner { max-width: 1120px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 48px; }
    .section-header h2 { font-size: 1.75rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
    .section-header p { color: var(--text-muted); font-size: 1rem; }

    /* Grids */
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }

    /* Service Cards */
    .service-card { padding: 28px; background: var(--surface); border: 1px solid var(--border); border-radius: 12px; transition: all .15s; }
    .service-card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.3); }
    .service-icon { width: 52px; height: 52px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
    .service-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
    .service-card p { font-size: .85rem; color: var(--text-muted); line-height: 1.5; }

    /* Feature Cards */
    .features { background: var(--bg); }
    .feature-card { text-align: center; padding: 36px 24px; }
    .feature-icon { width: 64px; height: 64px; margin: 0 auto 16px; background: rgba(59,130,246,.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary); }
    .feature-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
    .feature-card p { font-size: .88rem; color: var(--text-muted); max-width: 280px; margin: 0 auto; line-height: 1.5; }

    /* CTA */
    .cta { padding: 40px 24px 80px; }
    .cta-card { text-align: center; padding: 56px 32px; background: linear-gradient(135deg, rgba(59,130,246,.08), rgba(59,130,246,.02)); border: 1px solid rgba(59,130,246,.15); border-radius: 16px; }
    .cta-card h2 { font-size: 1.5rem; font-weight: 800; color: var(--text); margin-bottom: 10px; }
    .cta-card p { color: var(--text-muted); font-size: .95rem; margin-bottom: 28px; }
    .cta-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .btn-cta { padding: 11px 24px; background: var(--primary); color: #fff; font-size: .9rem; font-weight: 600; border-radius: 8px; text-decoration: none; transition: background .15s; }
    .btn-cta:hover { background: var(--primary-hover); color: #fff; }

    /* Footer */
    .footer { padding: 48px 24px 32px; background: var(--surface); border-top: 1px solid var(--border); }
    .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 32px; margin-bottom: 32px; }
    .footer-logo { display: flex; align-items: center; gap: 8px; font-size: 1rem; font-weight: 700; color: var(--text); margin-bottom: 12px; }
    .footer-logo .accent { color: var(--primary); }
    .footer-desc { font-size: .85rem; color: var(--text-muted); line-height: 1.5; }
    .footer h4 { font-size: .85rem; font-weight: 700; color: var(--text); margin-bottom: 12px; text-transform: uppercase; letter-spacing: .05em; }
    .footer a, .footer span { display: block; font-size: .85rem; color: var(--text-muted); padding: 4px 0; text-decoration: none; }
    .footer a:hover { color: var(--primary); }
    .footer-bottom { border-top: 1px solid var(--border); padding-top: 20px; text-align: center; font-size: .82rem; color: var(--text-muted); }
  `]
})
export class HomeComponent {}
