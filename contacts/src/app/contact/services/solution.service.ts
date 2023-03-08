import { environment } from './../../../environments/environment.prod';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  // readonly não permite fazer modificações
  private readonly API = `${environment.API}contacts`;
  //private readonly API = 'http://localhost:3000/contacts';

  constructor(private httpCliente: HttpClient) //injeção de dependências
  {}

  listarTodos() {
    return this.httpCliente.get<Contact[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(contacts => console.log(contacts))
      );
  }

  remove(contacts: Contact[], contact: Contact) {
    return contacts.filter((a) => contact.id !== a.id)
  }
}
