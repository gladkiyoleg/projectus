import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent {
	user: {name: string, position: string, image: string, completed: number, opened: number} = {
		name: 'Jean Gonzales',
		position: 'Product Owner',
		image: './assets/img/avatars/004-girl-1.png',
		completed: 372,
		opened: 11
	}
  constructor() { }

}
