import {
  computed,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { VideoItem } from '@core/models';
import { VIDEOS_MOCK } from 'src/app/features/video-list/mocks/videos.mock';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  videos: WritableSignal<VideoItem[]> = signal<VideoItem[]>(VIDEOS_MOCK.items);

  constructor() {}

  getVideos(): Signal<VideoItem[]> {
    return this.videos;
  }

  searchVideos(searchText: string): void {
    if (!searchText) this.videos.set(VIDEOS_MOCK.items);

    const result = VIDEOS_MOCK.items.filter((v) =>
      v.snippet.title.toLowerCase().includes(searchText.toLowerCase()),
    );

    this.videos.update(() => result);
  }
}
