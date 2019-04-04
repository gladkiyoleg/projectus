import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
	styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {

  @Input('item') item: {
    id: number,
    body: string, 
    completed: boolean
  };

  @Input('count') count;

  getType(isCompleted) {
    return isCompleted ? 'check' : 'uncheck';
  }

	constructor() {}

}
