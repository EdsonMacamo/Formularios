import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from-validation',
  templateUrl: './reactive-from-validation.component.html',
  styleUrls: ['./reactive-from-validation.component.css']
})
export class ReactiveFromValidationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(){

  }
  clientForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: ['', [Validators.required]],
    birth: [new Date(), [Validators.required]],
    age: [0, [Validators.required, Validators.max(150), Validators.min(0)]],
    email: ['', [Validators.required, Validators.email]],
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
    phone1: ['', [Validators.required]],
    phone2: ['', [Validators.required]], 
  });
  

}
