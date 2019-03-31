import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	title = 'Website Redesign';
	users: Array<{id: number, image: string, name: string}> = [
		{id: 1, image: './assets/img/avatars/001-man.png', name: 'man'},
		{id: 2, image: './assets/img/avatars/002-girl.png', name: 'girl'},
		{id: 3, image: './assets/img/avatars/003-boy.png', name: 'boy'},
	];
  constructor() { }
}
