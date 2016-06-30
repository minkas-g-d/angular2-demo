import {Component} from '@angular/core';
import {PostsService} from './posts.service';


@Component({
	template: `
		<h1>All Posts</h1>
		<div class="row">
			<div class="col-md-6">
				<div class="all-posts" *ngFor="let post of posts">
					<h2>{{post.title}}</h2>
					<p>{{post.body}}</p>
				</div>
			</div>
		</div>
	`,
    providers: [PostsService]
})
export class PostsComponent {

	postService: PostsService;
	posts: any[];

	constructor() {
		this.postService = new PostsService();

		this.posts = this.postService.getPosts();
	}

}