import { Component, OnInit, NgModule } from '@angular/core';
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




  constructor( private router: Router, private authService: AuthService,  fb: FormBuilder) {
    {
    this.form = fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }
  }
//   model={
//  email:'',
//     password:''
//   };
//   emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
        const data = res.json().data[0]._id;
        console.log(data)

        if(res.json().JWT_Token){
          console.log(res.json().JWT_Token)
          var Token = res.json().JWT_Token;
          localStorage.setItem('token',Token)
          localStorage.setItem('uid', data);
          var decoded = jwt_decode(Token)
          console.log(Token);
          console.log(res)
          // if(res.json().)
          // this.router.navigate(['\intimate'])
          
          // localStorage.setItem('uid', data)
          
        }
        else{
          this.form.reset(); 
          this.logInvalid = true;
        }
      },
      err=>{console.log('err')
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

