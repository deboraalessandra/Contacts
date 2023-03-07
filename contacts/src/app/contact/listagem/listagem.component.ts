import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact } from '../model/contact';
import { SolutionService } from './../services/solution.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone', 'remove', 'edit'];
  //contacts: Contact[] = []; // lista de atributo de pessoas

  contacts$: Observable<Contact[]>;

  constructor(private SoluctionService: SolutionService) {
    this.contacts$ = this.SoluctionService.listarTodos();
  } //adicionando no construtor a injeção de serviço

  ngOnInit(): void {
    //  this.SoluctionService.listarTodos().subscribe(console.log);
    //  this.SoluctionService.listarTodos()
    //   .subscribe(dados => this.contacts = dados);
    // this.contacts$ = this.SoluctionService.listarTodos();
  }

}
