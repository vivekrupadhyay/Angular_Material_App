import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addjob-details',
  templateUrl: './addjob-details.component.html',
  styleUrls: ['./addjob-details.component.css']
})
export class AddjobDetailsComponent implements OnInit {
title="Add job details";
submitted = false;

jobDetailsForm:FormGroup;
  constructor(private location:Location) { }

  ngOnInit(): void {
    this.jobDetailsForm=new FormGroup({
      jobtitle:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      employer:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      city:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      startdate:new FormControl('',[Validators.required]),
      enddate:new FormControl('',[Validators.required]),
      //email:new FormControl('',[Validators.required,Validators.maxLength(60),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    
    });
  }
public hasError=(controlName:string,errorName:string)=>{
    return this.jobDetailsForm.controls[controlName].hasError(errorName);
  }
  onCancel(){
    this.location.back();
  }
  save() {
    this.submitted = true;
  }


}
