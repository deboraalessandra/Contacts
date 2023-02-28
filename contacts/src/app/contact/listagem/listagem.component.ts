import { Component, OnInit } from '@angular/core';

import { Contact } from '../model/contact';
import { SolutionService } from './../services/solution.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  contacts: Contact[] = [
  ]; // lista de atributo de pessoas
  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone'];

  constructor(private SoluctionService: SolutionService) {} //adicionando no construtor a injeção de serviço

  ngOnInit(): void {
    //  this.SoluctionService.listarTodos().subscribe(console.log);
    this.SoluctionService.listarTodos()
      .subscribe(dados => this.contacts = dados);
  }

}
