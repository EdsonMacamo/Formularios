import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-grup',
  templateUrl: './form-grup.component.html',
  styleUrls: ['./form-grup.component.css']
})
export class FormGrupComponent implements OnInit {

   clientForm = new FormGroup({
     firstName: new FormControl(''),
     lastName: new FormControl(''),
     name:new FormGroup({
       firstName: new FormControl(''),
       lastName: new FormControl('')
     })
   });
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.clientForm.value);
 
  }

}
