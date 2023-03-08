import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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

  constructor(private SoluctionService: SolutionService, //adicionando no construtor a injeção de serviço
    public dialog: MatDialog,
    ) {
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

  ngOnInit(): void {}
}
