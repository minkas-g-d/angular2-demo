import {Component} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {PostsService} from './posts/posts.service';
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

			<div class="row">
				<div class="col-md-6">
					<div class="all-posts" *ngFor="let post of posts">
						<h2>{{post.title}}</h2>
						<p>{{post.body}}</p>
					</div>
				</div>
			</div>
		</div>
	`,
	directives: [NavbarComponent, ROUTER_DIRECTIVES],
	providers: [PostsService]
})
export class AppComponent {
	postService: PostsService;
	posts: any[];

	constructor() {
		this.postService = new PostsService();

		this.posts = this.postService.getPosts();
	}
}