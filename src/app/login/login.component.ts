import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  val = {
    email: "teste@teste.com",
    password: "teste12345"
  }
  
  constructor() {}

  ngOnInit() {}

  login(loginForm: NgForm, submit: any) {
    console.log(submit);
    // console.log(loginForm.value, loginForm.valid, submit);
  }
}
