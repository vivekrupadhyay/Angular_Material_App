import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from "@angular/forms";
import { Location } from "@angular/common";
import { AlertService } from "src/app/services/alert.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/model/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  title = "Heading";
  headingForm: FormGroup;
  submitted = false;
  output: any;
  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.headingForm = this.formBuilder.group({
      firstname: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      lastname: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      city: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      state: new FormControl("", [
        Validators.required,
        Validators.maxLength(30),
      ]),
      pincode: new FormControl("", [
        Validators.required,
        Validators.maxLength(6),
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(60),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.headingForm.controls[controlName].hasError(errorName);
  };
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  onCancel() {
    this.location.back();
  }
  public save = (userFormValue) => {
    debugger;
    if (this.headingForm.valid) {
      this.CreateUser(userFormValue);
    }
  };
  private CreateUser = (userFormValue) => {
    debugger;
    let user: User = {
      firstname: userFormValue.firstname,
      lastname: userFormValue.lastname,
      city: userFormValue.city,
      state: userFormValue.state,
      pincode: userFormValue.pincode,
      mobile: userFormValue.mobile,
      email: userFormValue.email,
    };
    this.userService.save(user).subscribe((res) => {
      debugger;
      this.output = res;
      if (this.output.StatusCode == "409") {
        this.alertService.error("This record already exists!!");
      } else if (this.output.StatusCode == "200") {
        this.alertService.success("Record added successfully.", true);
        this.router.navigate(["/home"]);
      } else {
        this.alertService.error("Something went wrong.");

        this.router.navigate(["/login"]);
      }
    });
  };
}
