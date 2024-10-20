import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TvShowTableComponent} from '../tv-show-table/tv-show-table.component';
import { Observable } from 'rxjs';
import { TvShow } from '../interfaces/tv-show.interface';
import { TvShowsService } from '../tv-shows.service';

@Component({
  selector: 'app-search-view',
  standalone: true,
  imports: [CommonModule, TvShowTableComponent],
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent {
  filteredShows: TvShow[] = [];
  constructor(private tvShowsService: TvShowsService) {
  }
  searchTvShows(showName: string, event: Event) {
    event.preventDefault();
    this.tvShowsService.searchTvShowsByName(showName).subscribe((response: any) => {
      this.filteredShows = response;
    })
;  }
}
