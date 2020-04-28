import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
submitted = false;
output: any;
  title = "Login Page";
  constructor(private formBuilder:FormBuilder,private location:Location) { }//private router:Router,private http:HttpClient

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.maxLength(60),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required])
    });
    // this.loginForm=this.formBuilder.group({
    //   email:['',Validators.required],
    //   password:['',Validators.required]
    // });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }
  onCancel(){
    this.location.back();
  }
  save() {
    this.submitted = true;
  }
}
