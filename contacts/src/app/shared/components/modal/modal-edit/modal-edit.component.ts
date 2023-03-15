import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolutionService } from 'src/app/contact/services/solution.service';
import { Contact } from './../../../../contact/model/contact';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent implements OnInit {
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Contact,
    public dialogRef: MatDialogRef<ModalEditComponent>,
    private service: SolutionService,
    private FormBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void { }

  save(): void {
    // Chamar serviço para editar o contato
    this.service.edit(this.data).subscribe(() => {
      this.dialogRef.close(this.data);
      this.onSuccess()
    }, error => {
      this.onError();
    }
    );
  }
  private onError() {
    this.snackBar.open('Erro ao editar contato.', '', { duration: 4000 });
  }

  private onSuccess() {
    this.snackBar.open('Contato editado com sucesso!', '', { duration: 4000 });
    this.dialogRef.close(true);
  }

  cancel(): void {
    // Fechar modal sem salvar
    this.dialogRef.close();
  }
}
