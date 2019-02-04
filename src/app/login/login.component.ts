import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { jwt_decode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  logInvalid = false;
  selectedUser:string;

  constructor(
    private router: Router, 
    private authService: AuthService,
    fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  ngOnInit() {
    //this.authService.logOut();
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get role(){
    return this.form.get('role');
  }


  onSubmit(loginForm){
    let user = loginForm.value;
  //  console.log(user)
    this.authService.loginUser(user).subscribe(
      res=>{
        console.log(res)
        if(res.json().JWT_Token){
          console.log(res.json().JWT_Token)
          var Token = res.json().JWT_Token;
          localStorage.setItem('token', Token);
          var decoded = jwt_decode(Token)
          console.log(Token);
          
          localStorage.setItem('token', Token);

          this.router.navigate(['\intimate'])
        }
        else{
          this.form.reset(); 
          this.logInvalid = true;
        }
      },
      err=>{
        throw err;
      }
    )
    if(this.selectedUser=='QC'){
      this.router.navigate(['intimate']);
    }
    else{
      this.router.navigate(['graph']);

    }

  }

  userChange(event){
    this.selectedUser=event.target.value;
    

  }
  textBoxDisabled = true;

  toggle1(){
    console.log("toggle function");
    this.textBoxDisabled =false ;
  }
  toggle2(){
    console.log("toggle function");
    this.textBoxDisabled = true;
  }
}
