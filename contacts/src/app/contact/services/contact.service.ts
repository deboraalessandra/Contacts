import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact'; //importado o modelo

const LS_CHAVE: string = "contacts"; //chave para acesso ao LocalStorage

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpCliente: HttpClient) { }
  // o que ele faz? Vai no LS, na chave que definimos. Ai vai ter uma lista de contatos (const contacts)
  listarTodos(): Contact[] {
    const contacts = localStorage[LS_CHAVE];
    // Precisa do condicional, pois retorna undefined se a chave não existe
    return contacts ? JSON.parse(contacts) : [];
    //Se tiver alguma coisa dentro de contacts faz o parse e se não tiver vai dar UNDEFINED e retorna vazio
    // JSON.parse retorna um objeto javascript


  }

  inserir(contact: Contact): void {
    const contacts = this.listarTodos();
    contact.id = new Date().getTime(); //para exibir um id único
    contacts.push(contact);
    localStorage[LS_CHAVE] = JSON.stringify(contacts); //pegar a nova lista e armazenar no localStorage
  }

  atualizar(contact: Contact): void {
    const contacts: Contact[] = this.listarTodos();
    contacts.forEach(
      //objs é a lista
      (obj, index, objs) => {
        //Quando encontra o contato com o mesmo id, altera a lista
        if (contact.id === obj.id) {
          objs[index] = contact;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(contacts); //depois atualiza o localStorage
    // stringify é quando vc tem um objeto e quer que vc retorne uam string json
  }

  remover(id: number): void {
    //usando let para poder ser alterada depois
    let contacts: Contact[] = this.listarTodos();

    //filter retorna a lista com os registros que satisfazem a condição
    //ou seja, quando o id é diferente do passado na função
    contacts = contacts.filter( contact => contact.id !== id );
    localStorage[LS_CHAVE] = JSON.stringify(contacts); //depois atualiza o localStorage
  }

}
