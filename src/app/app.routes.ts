import { Routes } from '@angular/router';
import { VideoListComponent } from './features/video-list/components/video-list/video-list.component';
import { VideoDetailsComponent } from './features/video-details/components/video-details/video-details.component';
import { NotFoundComponent } from './features/not-found/components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/videos' },
  { path: 'videos', component: VideoListComponent },
  { path: 'videos/:id', component: VideoDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
