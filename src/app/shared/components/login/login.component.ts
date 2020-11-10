import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();
  @Output('forgotComponentOpen') open: EventEmitter<String> = new EventEmitter();
  @Output ('createComponentOpen') createComponentOpen: EventEmitter<String> = new EventEmitter();
  loginForm: FormGroup
  public error = null;
  public msg = null;
  submitForm = false;
  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.loginForm.controls; }
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     mobileNumber : ['',[Validators.required, Validators.maxLength(10)]]
    });
  }
  closeComponent() {
    this.close.emit("close");
  }

  onForgotClick() {
    this.open.emit('');
  }

  onCreateClick(){
    this.createComponentOpen.emit('');
  }

  login(){
    this.submitForm = true;
    this.error = null;
    this.msg = null;
    if(this.loginForm.valid){
          this.msg = "Login successfully"
    }else{
      this.error = "Enter mobile number." 
      this.error = " Please Enter mobile number."
    }
  }
  

}
