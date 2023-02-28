
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private readonly API = 'http://localhost:3000/contacts';

  constructor(private httpCliente: HttpClient) //injeção de dependências
  { }

  listarTodos(){
   return this.httpCliente.get<Contact[]>(this.API);
  }
}
