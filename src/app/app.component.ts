import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';



@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, TopMenuComponent],
})
export class AppComponent {
	title = 'app works!';
}
