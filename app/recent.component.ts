import { Component,OnInit } from '@angular/core';
import { Video } from './video'
import { VideoService } from './video.service';

@Component({
    selector: 'my-recent',
    templateUrl: 'app/recent.component.html',
  	styleUrls: ['app/recent.component.css']
})

export class RecentComponent implements OnInit{

	videos: Video[];
	constructor(private videoService: VideoService) { }

  	getVideos(): void {
    	this.videoService.getVideos().then(videos => this.videos = videos);
  	}

  	ngOnInit(): void {
    	this.getVideos();
  	}
}