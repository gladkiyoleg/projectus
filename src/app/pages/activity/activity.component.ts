import { Component, OnInit} from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
	title = 'today';

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
