import { Component, OnInit, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { EventEmitter } from 'stream';

import { Contact } from '../model/contact';
import { SolutionService } from './../services/solution.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {
  contacts$: Observable<Contact[]>;
  //@Input() edit = new EventEmitter();

  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone', 'remove', 'edit', 'created'];
  //contacts: Contact[] = []; // lista de atributo de pessoas


  constructor(private SoluctionService: SolutionService, //adicionando no construtor a injeção de serviço
    public dialog: MatDialog,
    public modalDialog: MatDialog
    ) {
      this.listar();
    }

  listar (){
    this.contacts$ = this.SoluctionService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar sua lista')
          return of([])
        })
      );
  }

  save(data: Contact) {
    this.SoluctionService.save(data)
    .subscribe(() => {
        this.listar()
    });
  }

  atualizarLista(){
    this.contacts$ = this.SoluctionService.listarTodos()
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  openModal(){
    this.modalDialog.open(ModalComponent)
  }

  ngOnInit(): void {}

  onEdit(contact: Contact){

  }
}
