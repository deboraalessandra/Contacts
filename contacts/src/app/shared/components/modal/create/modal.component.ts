import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SolutionService } from 'src/app/contact/services/solution.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  public form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(@Inject(MAT_DIALOG_DATA)

  public data: string,
    private FormBuilder: FormBuilder,
    private service: SolutionService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ModalComponent>

  ) {
    this.form = this.FormBuilder.group({
      name: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe((result) => {
        this.onSuccess()
      },
        (error) => {
          this.onError();
        });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar contato.', '', { duration: 4000 });
  }

  private onSuccess() {
    this.snackBar.open('Contato salvo com sucesso!', '', { duration: 4000 });
    this.dialogRef.close(true);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
