import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ErrorDialogComponent,
    ModalComponent
  ]
})
export class SharedModule { }
