import {Injectable} from '@angular/core';

@Injectable()
export class PostsService {
	posts = [
		{ 
			title: 'Lorem ipsum dolor sit amet',
			body: ' Nam sed posuere metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce bibendum nunc ut ipsum pulvinar, in sagittis libero placerat. Mauris laoreet finibus libero eu blandit. Duis quis turpis accumsan, porttitor lorem et, vehicula velit. Mauris purus magna, sodales ut arcu at, tempus congue quam. Cras id metus et quam dapibus placerat ac a elit. '
		},
		{ 
			title: 'Title of second blogpost',
			body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sapien sit amet purus vehicula, vitae suscipit erat commodo. Phasellus sagittis consectetur rhoncus. Fusce ut lacus mi. Nulla rutrum sagittis maximus. Vestibulum efficitur eu est eget posuere. Suspendisse vitae lorem a dui luctus interdum.'
		},
		{ 
			title: 'Title of third blogpost',
			body: 'Praesent sit amet justo tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vel pulvinar neque. '
		},

	];

	getPosts() {
		return this.posts;
	}


}