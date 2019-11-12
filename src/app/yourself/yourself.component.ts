import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-yourself',
  templateUrl: './yourself.component.html',
  styleUrls: ['./yourself.component.css']
})
export class YourselfComponent implements OnInit {

  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required,]),
    jobTitle: new FormControl('', [Validators.required,]),
    companyName: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required,]),
    PhoneEnabled: new FormControl('', [Validators.required,]),
    webSite: new FormControl('', [Validators.required,]),
    faceBook: new FormControl('', [Validators.required,]),
    linkedIn: new FormControl('', [Validators.required,]),
    datePicker: new FormControl('', [Validators.required,]),
    textArea: new FormControl('', [Validators.required,]),
  });

  constructor() { }

  ngOnInit() {
  }

  private onSubmit() {
    console.log(this.myForm.value);
  }
}
