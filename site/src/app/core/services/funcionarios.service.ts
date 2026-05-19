import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Funcionario } from '../types/types';

@Injectable({ providedIn: 'root' })
export class FuncionariosService {
  private readonly API = '/api/funcionarios';
  constructor(private http: HttpClient) {}

  private log(method: string, data?: unknown) {
    console.log(`[FuncionariosService.${method}]`, data ?? '');
  }

  private handleError(err: HttpErrorResponse) {
    console.error('[FuncionariosService] HTTP error:', err.status, err.statusText, err.message);
    return throwError(() => err);
  }

  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API).pipe(
      tap(d => this.log('listar', { count: d.length })),
      catchError(e => this.handleError(e))
    );
  }

  buscarPorId(id: number | string): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.API}/${id}`).pipe(
      tap(d => this.log('buscarPorId', d)),
      catchError(e => this.handleError(e))
    );
  }

  incluir(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.API, funcionario).pipe(
      tap(d => this.log('incluir', d)),
      catchError(e => this.handleError(e))
    );
  }

  editar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.API}/${funcionario.id}`, funcionario).pipe(
      tap(d => this.log('editar', d)),
      catchError(e => this.handleError(e))
    );
  }

  excluir(id: number | string): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.API}/${id}`).pipe(
      tap(() => this.log('excluir', { id })),
      catchError(e => this.handleError(e))
    );
  }
}
