import { Component, OnInit} from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

	constructor(private data: PostService) {}

	posts: Object;

	ngOnInit() {
		
		this.data.getPosts().subscribe(
      (data)=>{
        this.posts = data;
			}
		);

	}

}
