import { Component, OnInit, Signal } from '@angular/core';
import { VideoItemComponent } from '../video-item/video-item.component';
import { VideoItem } from '@core/models';
import { VideosService } from '@core/services/videos.service';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [VideoItemComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
})
export class VideoListComponent implements OnInit {
  videos!: Signal<VideoItem[]>;

  constructor(private videosService: VideosService) {}

  ngOnInit(): void {
    this.videos = this.videosService.getVideos();
  }
}
