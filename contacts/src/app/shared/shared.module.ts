import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ModalComponent } from './components/modal/modal.component';
import { ErrorConfirmationComponent } from './components/error-confirmation/error-confirmation.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    ModalComponent,
    ErrorConfirmationComponent
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
