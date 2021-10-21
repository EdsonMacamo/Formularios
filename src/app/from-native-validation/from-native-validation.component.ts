import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-native-validation',
  templateUrl: './from-native-validation.component.html',
  styleUrls: ['./from-native-validation.component.css']
})
export class FromNativeValidationComponent implements OnInit {


  firstName = "";
  lastName = "";
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }
}
