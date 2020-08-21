import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from 'src/service/validation-service';
import { Store } from '@ngrx/store';
import * as appReducer from 'src/store/appStore.reducer';
import { UserService } from 'src/app/api/user.service';
import { TransferService } from 'src/app/api/transfer.service';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})
export class AuthSigninComponent implements OnInit {
  public userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
      password: ['', [Validators.required, ValidationService.passwordValidator, Validators.minLength(6), Validators.maxLength(20)]]
    });

   }

   
   ngOnInit() {
    
    }
 
    signin() {
      if(this.userForm.dirty && this.userForm.valid) {
        if(this.userForm.controls['username'].value === 'vuphuonghoaidan' && this.userForm.controls['password'].value === 'dan123456') {
          const user = {
            username: this.userForm.controls['username'].value
          }
          localStorage.setItem('USER_ifo', JSON.stringify(user));
          this.router.navigateByUrl("/dashboard/default");
        }
      }
    }
 

}
