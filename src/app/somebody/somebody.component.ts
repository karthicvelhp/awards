import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NominationService } from '../nomination.service';

@Component({
  selector: 'app-somebody',
  templateUrl: './somebody.component.html',
  styleUrls: ['./somebody.component.css']
})
export class SomebodyComponent implements OnInit {

  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required,]),
    jobTitle: new FormControl('', [Validators.required,]),
    nominee: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required,]),
    nomineeFirstName: new FormControl('', [Validators.required,]),
    nomineeLastName: new FormControl('', [Validators.required,]),
    nomineeJobTitle: new FormControl('', [Validators.required,]),
    companyName: new FormControl('', [Validators.required,]),
    nomineeEmail: new FormControl('', [Validators.required,]),
    nomineePhone: new FormControl('', [Validators.required,]),
    nomineeWebsite: new FormControl('', [Validators.required,]),
    nomineeFacebook: new FormControl('', [Validators.required,]),
    nomineeLinked: new FormControl('', [Validators.required,]),
    datePicker: new FormControl('', [Validators.required,]),
    textArea: new FormControl('', [Validators.required,]),
  });

  constructor(private nomination: NominationService) { }

  ngOnInit() {
  }

  private onSubmit() {
    this.nomination.createCustomer(this.myForm);
  }

}
