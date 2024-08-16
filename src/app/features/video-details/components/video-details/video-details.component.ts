import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-details',
  standalone: true,
  imports: [],
  templateUrl: './video-details.component.html',
  styleUrl: './video-details.component.scss',
})
export class VideoDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id') === 'YN8zNnV0sK8') return;

      this.router.navigate(['/dsdsdss'], { skipLocationChange: true });
    });
  }
}
