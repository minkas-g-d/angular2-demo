import {Component} from '@angular/core';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    template: `
		<navbar></navbar>
		<h1>{{pageTitle}}</h1>
		<div class="container">
			The content will change here.
		</div>
	`,
	directives: [NavbarComponent]
})
export class AppComponent {
	pageTitle = 'Welcome to UP2 blog';
}