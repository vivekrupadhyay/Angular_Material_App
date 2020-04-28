import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import { Location } from "@angular/common";
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: "app-contactus",
  templateUrl: "./contactus.component.html",
  styleUrls: ["./contactus.component.css"],
})
export class ContactusComponent implements OnInit {
  contactusForm: FormGroup;
  isSubmitted: true;
  title: "Contact us";
  constructor(private formBuilder: FormBuilder, private location: Location,titleService:TitleService) {}

  ngOnInit(): void {
    this.contactusForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [
        Validators.required,
        Validators.maxLength(100),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.maxLength(10),
      ]),
      comment: new FormControl("", [Validators.required]),
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.contactusForm.controls[controlName].hasError(errorName);
  };
  onCancel() {
    this.location.back();
  }
  save() {
    this.isSubmitted = true;
  }
}
