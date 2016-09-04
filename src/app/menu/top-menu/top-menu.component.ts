import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
  styleUrls: ['top-menu.component.css'],
  directives: [ROUTER_DIRECTIVES]

})
export class TopMenuComponent implements OnInit {

	loggedIn$;

  constructor(
  	private userService: UserService, 
  	private router: Router
  	) { }

  ngOnInit() {
  	this.loggedIn$ = this.userService.getLoggedIn();
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    // setTimeout(() => { this.router.navigate(['']); }, 500);
    this.router.navigate(['']);
    
    return false;
  }

}
