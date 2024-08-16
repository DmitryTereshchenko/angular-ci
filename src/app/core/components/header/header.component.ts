import { Component } from '@angular/core';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchFormComponent, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
