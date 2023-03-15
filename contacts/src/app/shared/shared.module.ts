import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorConfirmationComponent } from './components/error-confirmation/error-confirmation.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ModalComponent } from './components/modal/create/modal.component';
import { ModalEditComponent } from './components/modal/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    ModalComponent,
    ErrorConfirmationComponent,
    ModalEditComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: [
    ErrorDialogComponent,
    ModalComponent,
    MatSnackBarModule
  ]
})
export class SharedModule { }
