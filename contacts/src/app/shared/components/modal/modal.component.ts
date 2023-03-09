import { ListagemComponent } from './../../../contact/listagem/listagem.component';
import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SolutionService } from './../../../contact/services/solution.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  private location: Location

  constructor(@Inject(MAT_DIALOG_DATA)

    public data: string,
    private FormBuilder: FormBuilder,
    private service: SolutionService,
    private snackBar: MatSnackBar,
   // private listagem: ListagemComponent

  ) {
    this.form = this.FormBuilder.group({
      name: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void {

  }

  loading(){
   location.reload();
  }

  onSubmit() {
    //console.log('onSubmit', this.form.value);
    this.service.save(this.form.value).subscribe( result => this.onSuccess(), error => { this.onError() } );

  }

  private onError(){
    this.snackBar.open('Erro ao salvar contato.', '', {duration: 4000});
  }

  private onSuccess(){
    this.snackBar.open('Contato salvo com sucesso!', '', {duration: 5000});
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
