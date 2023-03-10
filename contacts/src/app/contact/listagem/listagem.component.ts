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

  //@Output() add = new EventEmitter(false);
  contacts$: Observable<Contact[]>;
  //@Input() edit = new EventEmitter();

  displayedColumns = ['id', 'name', 'lastName', 'email', 'phone', 'actions'];
  //contacts: Contact[] = []; // lista de atributo de pessoas

  constructor(private SoluctionService: SolutionService, //adicionando no construtor a injeção de serviço
    public dialog: MatDialog,
    public modalDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.update();
  }

  update() {
    this.contacts$ = this.SoluctionService.listarTodos()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar sua lista')
          return of([])
        })
      );
      console.log('atualizou');
  }

  // save(data: Contact) {
  //   this.SoluctionService.save(data)
  //     .subscribe(() => {
  //       this.update()
  //     });
  //     console.log('atualizou');
  // }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  openModal() {
    const dialogRef = this.modalDialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe
    (result => {
      if(result){
        this.update();
      }});
  }

  onEdit(contact: Contact) {}
}
