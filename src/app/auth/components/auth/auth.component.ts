import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    
   }

  ngOnInit(): void {
  }

  loginUser(){
    const {userName, password} = this.loginForm.value;
    //console.log(this.loginForm.value);
    this.authService.login(userName, password).subscribe(
      (res: any) => {
        console.log(res)
        localStorage.setItem('auth_token', res.token)
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log(error); 
      }
      
    );
  }

}
