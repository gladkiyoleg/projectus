import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent {
	title = 'today';
	items: Array<{type: number, text: string, attachments?: object, date?: any}> = [
		{type: 1, text: 'Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users', date: new Date(2019, 2, 30, 20, 40)},
		{type: 2, text: 'Emilee Simchenko commented on Account for teams and personal in bottom style', date: new Date(2019, 2, 30, 19, 32)},
		{type: 3, text: 'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes'},
		{type: 4, text: 'Darika Samak uploaded 4 files on An option to search in current projects or in all projects', attachments: ['/assets/img/tmp/img-tmp1.jpg','/assets/img/tmp/img-tmp2.jpg','/assets/img/tmp/img-tmp1.jpg','/assets/img/tmp/img-tmp2.jpg'], date: new Date(2019, 2, 30, 18, 2)}
	];
  constructor() { }

}
