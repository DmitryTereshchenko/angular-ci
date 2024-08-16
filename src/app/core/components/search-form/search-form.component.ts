import { Component } from '@angular/core';
import { VideosService } from '@core/services/videos.service';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  searchValue: string = '';

  constructor(private videosService: VideosService) {}

  searchVideos(input: HTMLInputElement) {
    this.videosService.searchVideos(input.value);
  }
}
