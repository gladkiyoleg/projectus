import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
	styleUrls: ['./activity-item.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ActivityItemComponent {
	@Input('item') item: {id: number, body: string, date: any};

	getTypeIcon(type){
		switch(type) {
			case 1: return 'check';
			case 2: return 'comment';
			case 4: return 'download';
		}
	}
}
