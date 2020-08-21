import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {
  public userInfo;
  constructor(
    private router: Router,
  ) {
    this.userInfo = JSON.parse(localStorage.getItem('USER_ifo'));
  }

  ngOnInit() { }

  signout() {
    this.router.navigateByUrl("auth/signin");
  }
}
