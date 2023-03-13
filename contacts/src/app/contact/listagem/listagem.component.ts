import { ErrorConfirmationComponent } from './../../shared/components/error-confirmation/error-confirmation.component';
import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  //@Output() add = new EventEmitter(false);
  contacts$: Observable<Contact[]>;
  // @Input() contact: Contact[] = [];
  // @Output() remove = new EventEmitter();

  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone', 'actions'];
  //contacts: Contact[] = []; // lista de atributo de pessoas

  constructor(
    private SoluctionService: SolutionService, //adicionando no construtor a injeção de serviço
    public dialog: MatDialog,
    public modalDialog: MatDialog,
    private snack: MatSnackBar

    // public dialogRef: MatDialogRef<ModalComponent>
  ) { }

  ngOnInit(): void {
    this.updateContact();
  }

  updateContact() {
    this.contacts$ = this.SoluctionService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar sua lista')
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  openModal() {
    const dialogRef = this.modalDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe
      (result => {
        if (result) {
          this.updateContact();
        }
      });
  }

  delete(contact: Contact) {
    const dialogRef = this.dialog.open(ErrorConfirmationComponent, {
      width: '250px',
      data: { nome: contact.name } // Envia o nome do contato para o diálogo de confirmação
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.SoluctionService.delete(contact).subscribe(() => {
          this.updateContact();
          this.onSuccessRemove();
        });
      }
    });
  }

  onSuccessRemove() {
    this.snack.open('Contato Removido com sucesso!', '', { duration: 5000 });
  }
}





