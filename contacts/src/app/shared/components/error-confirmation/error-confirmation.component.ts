import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/contact/model/contact';
import { SolutionService } from 'src/app/contact/services/solution.service';

@Component({
  selector: 'app-error-confirmation',
  templateUrl: './error-confirmation.component.html',
  styleUrls: ['./error-confirmation.component.scss']
})
export class ErrorConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string }
  ) {}

  onNaoClick(): void {
    this.dialogRef.close();
  }

  onSimClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }


}
