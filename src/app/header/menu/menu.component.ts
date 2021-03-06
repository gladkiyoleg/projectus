import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() { }

	menuItems = [
		{title: 'Tasks', link: '/tasks'},
		{title: 'Kanban', link: '/kanban'},
		{title: 'Activity', link: '/activity'},
		{title: 'Calendar', link: '/calendar'},
		{title: 'Files', link: '/files'},
	]

}
