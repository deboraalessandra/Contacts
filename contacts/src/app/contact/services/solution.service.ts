import { environment } from './../../../environments/environment.prod';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  // readonly não permite fazer modificações
  private readonly API = `${environment.API}contacts`;
  //private readonly API = 'http://localhost:3000/contacts';

  constructor(private httpCliente: HttpClient) //injeção de dependências
  { }

  listarTodos() {
    return this.httpCliente.get<Contact[]>(this.API)
      .pipe(
        delay(1000)
      );
  }

  save(contact: Contact) {
    return this.httpCliente.post<Contact[]>(this.API, contact); //retorna um observable de curso
  }

  delete(contact: Contact) {
    return this.httpCliente.delete(`${this.API}/${contact.id}`);
  }

  edit(contact: Contact) {
    const url = `${this.API}/${contact.id}`;
    return this.httpCliente.put<Contact[]>(url, contact);
  }
}
