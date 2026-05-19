export interface Funcionario {
  id?: number | string;
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
}

export interface Cliente {
  id?: number | string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}
