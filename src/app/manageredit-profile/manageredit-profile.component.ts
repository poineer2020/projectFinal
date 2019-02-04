import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manageredit-profile',
  templateUrl: './manageredit-profile.component.html',
  styleUrls: ['./manageredit-profile.component.css']
})
export class ManagereditProfileComponent implements OnInit {
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
