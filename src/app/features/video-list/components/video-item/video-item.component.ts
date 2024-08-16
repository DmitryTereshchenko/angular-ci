import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItem } from '@core/models';

@Component({
  selector: 'app-video-item',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './video-item.component.html',
  styleUrl: './video-item.component.scss',
})
export class VideoItemComponent {
  video = input<VideoItem>();

  constructor(private router: Router) {}

  onDetailsClick(): void {
    this.router.navigate(['/videos', this.video()?.id]);
  }
}
