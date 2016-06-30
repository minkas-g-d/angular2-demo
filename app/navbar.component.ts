import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
	selector: 'navbar',
	templateUrl: 'app/navbar.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {

	constructor(private _router: Router) {

	}

}