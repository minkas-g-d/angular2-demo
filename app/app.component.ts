import {Component} from '@angular/core';
import {NavbarComponent} from './navbar.component';
import {PostsService} from './posts/posts.service';


@Component({
    selector: 'my-app',
    template: `
		<navbar></navbar>
		<h1>{{pageTitle}}</h1>
		<div class="container">
			The content will change here.

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
	directives: [NavbarComponent],
	providers: [PostsService]
})
export class AppComponent {
	pageTitle = 'Welcome to UP2 blog';
	postService: PostsService;
	posts: any[];

	constructor() {
		this.postService = new PostsService();

		this.posts = this.postService.getPosts();
	}
}