import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Cliente } from '../types/types';

@Injectable({ providedIn: 'root' })
export class ClientesService {
  private readonly API = '/api/clientes';
  constructor(private http: HttpClient) {}

  private log(method: string, data?: unknown) {
    console.log(`[ClientesService.${method}]`, data ?? '');
  }

  private handleError(err: HttpErrorResponse) {
    console.error('[ClientesService] HTTP error:', err.status, err.statusText, err.message);
    return throwError(() => err);
  }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API).pipe(
      tap(d => this.log('listar', { count: d.length })),
      catchError(e => this.handleError(e))
    );
  }

  buscarPorId(id: number | string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`).pipe(
      tap(d => this.log('buscarPorId', d)),
      catchError(e => this.handleError(e))
    );
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente).pipe(
      tap(d => this.log('incluir', d)),
      catchError(e => this.handleError(e))
    );
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente).pipe(
      tap(d => this.log('editar', d)),
      catchError(e => this.handleError(e))
    );
  }

  excluir(id: number | string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/${id}`).pipe(
      tap(() => this.log('excluir', { id })),
      catchError(e => this.handleError(e))
    );
  }
}
