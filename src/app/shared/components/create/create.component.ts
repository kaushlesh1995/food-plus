import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output('close') close: EventEmitter<String> = new EventEmitter();
  @Output('loginComponent') loginComponent: EventEmitter<String> = new EventEmitter();
  createForm: FormGroup
  public error = null;
  public msg = null;
  submitForm = false;
  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.createForm.controls; }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      mobileNumber : ['',[Validators.required, Validators.maxLength(10)]]
     });
  }

  closeComponent() {
    this.close.emit("close");
  }
  onLoginClick(){
    this.loginComponent.emit('')
  }

  create(){
    this.submitForm = true;
    this.error = null;
    this.msg = null;
    if(this.createForm.valid){
          this.msg = "Create successfully"
    }else{
      this.error = " Please Enter mobile number."
    }
  }
}
