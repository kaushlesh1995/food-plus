import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();
  @Output('loginComponent') loginComponent: EventEmitter<String> = new EventEmitter();
  forgotForm: FormGroup
  public error = null;
  public msg = null;
  submitForm = false;
  constructor(private formBuilder: FormBuilder) { }


  get f() { return this.forgotForm.controls; }
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      mobileNumber : ['',[Validators.required, Validators.maxLength(10)]]
     });
  }

  closeComponent() {
    this.close.emit("close");
  }
  onLoginClick(){
    this.loginComponent.emit('')
  }
  
  forgot(){
    this.submitForm = true;
    this.error = null;
    this.msg = null;
    if(this.forgotForm.valid){
          this.msg = "Login successfully"
    }else{
      this.error = " Please Enter mobile number."
    }
  }

}
