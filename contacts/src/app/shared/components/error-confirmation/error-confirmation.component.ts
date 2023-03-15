import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-confirmation',
  templateUrl: './error-confirmation.component.html',
  styleUrls: ['./error-confirmation.component.scss']
})
export class ErrorConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ErrorConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nome: string }
  ) { }

  onNaoClick(): void {
    this.dialogRef.close();
  }

  onSimClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {}
}
