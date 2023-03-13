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
        delay(1000)
        // tap(contacts => console.log(contacts))
      );
  }

  save(contact: Contact){
    return this.httpCliente.post<Contact[]>(this.API, contact); //retorna um observable de curso
  }


  delete(contact: Contact) {
    return this.httpCliente.delete(`${this.API}/${contact.id}`);
  }

}
