//import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manager-editprofile',
  templateUrl: './manager-editprofile.component.html',
  styleUrls: ['./manager-editprofile.component.css']
})
export class ManagerEditprofileComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // rawid: ['', Validators.required],
    });
  }
  get f() { 
    return this.registerForm.controls; 
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

      alert('SUCCESS!! :-)')
    }
    }

  


