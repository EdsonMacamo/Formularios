import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-aray',
  templateUrl: './form-aray.component.html',
  styleUrls: ['./form-aray.component.css']
})
export class FormArayComponent implements OnInit {

  clientForm = this.fb.group({
   firstName:[''],
   lastName:[''],
   address:this.fb.group({
     street:[''],
     city:[''],
     state:['']
   }),
   phones:this.fb.array(['']),
   children:this.fb.array([])
  //  this.fb.group({
  //    name:[''],
  //    age:[''],
  //  })
  })
  phones = this.clientForm.get('phones') as FormArray;
  children = this.clientForm.get('children') as FormArray;
  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    
  }
  submit(){
    console.log(this.clientForm.value);
  }
  addPhone(){
   this.phones.push(this.fb.control(''))
  }
  addChild(){
    this.children.push(
      this.fb.group({
        name:this.fb.control(''),
        age:this.fb.control('')
      })
    )
  }
}
