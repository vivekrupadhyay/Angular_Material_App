import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title="Heading";
headingForm:FormGroup;
submitted = false;
  constructor(private formBuilder:FormBuilder,private location:Location) { }

  ngOnInit(): void {
    this.headingForm=new FormGroup({
      firstname:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      lastname:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      city:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      pincode:new FormControl('',[Validators.required,Validators.maxLength(6)]),
      mobile:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      email:new FormControl('',[Validators.required,Validators.maxLength(60),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    });
  }
  public hasError=(controlName:string,errorName:string)=>{
    return this.headingForm.controls[controlName].hasError(errorName);
  }
  onCancel(){
    this.location.back();
  }
  save() {
    this.submitted = true;
  }

}
