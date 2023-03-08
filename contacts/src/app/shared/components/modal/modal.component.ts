import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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
  private FormBuilder: FormBuilder
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

  onSubmit(){
    console.log('onSubmit', this.form.value);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
