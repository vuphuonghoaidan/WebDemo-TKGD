import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UiModalComponent } from 'src/app/theme/shared/components/modal/ui-modal/ui-modal.component';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.component.html',
  styleUrls: ['./account-information.component.scss']
})
export class AccountInformationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
