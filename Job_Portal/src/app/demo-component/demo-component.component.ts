import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo-component.component.html',
  styleUrls: ['./demo-component.component.css']
})
export class DemoComponentComponent implements OnInit {

  demoForm: FormGroup;
  collegesList: any[];
  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  form = new FormGroup({
    state: new FormControl(this.states[3]),
  });

  constructor() { }

  ngOnInit(): void {
    this.collegesList = [
      {
        collegeName : 'My School 1'
      },
      {
        collegeName : 'My School 2'
      }
    ]
    this.demoForm = new FormGroup({
      college: new FormControl(''),
      text: new FormControl(''),
    })
}

  submitForm(){
    console.log(this.demoForm.value)
  }

}
