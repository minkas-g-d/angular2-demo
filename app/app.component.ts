import {Component} from '@angular/core';
import {NavbarComponent} from './navbar.component';

import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home.component';

@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent },
	{ path: '/posts', name: 'Posts', component: PostsComponent },
	{ path: '/*other', name: 'Other', redirectTo: [ 'Home' ] }
])
@Component({
    selector: 'my-app',
    template: `
		<navbar></navbar>
		<div class="container">
			<router-outlet></router-outlet>
		</div>
	`,
	directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {}