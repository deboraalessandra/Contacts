import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ModalComponent } from 'src/app/shared/components/modal/create/modal.component';
import { ModalEditComponent } from 'src/app/shared/components/modal/modal-edit/modal-edit.component';

import { Contact } from '../model/contact';
import { ErrorConfirmationComponent } from './../../shared/components/error-confirmation/error-confirmation.component';
import { SolutionService } from './../services/solution.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone', 'actions'];

  constructor(
    private SoluctionService: SolutionService, //adicionando no construtor a injeção de serviço
    public dialog: MatDialog,
    public modalDialog: MatDialog,
    private snack: MatSnackBar
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
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.updateContact();
        }
      });
  }

  editar(contact: Contact) {
    const dialogRef = this.dialog.open(ModalEditComponent, {
      width: '500px',
      data: { id: contact.id, name: contact.name, lastName: contact.lastName, email: contact.email, phone: contact.phone }
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          this.updateContact();
        }
      });
  }

  edited(contact: Contact) {
    this.SoluctionService.edit(contact);
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

  onSuccessEdit() {
    this.snack.open('Contato Editado com sucesso!', '', { duration: 5000 });
  }
}





