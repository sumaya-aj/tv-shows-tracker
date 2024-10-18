import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsService } from '../tv-shows.service';
import { TvShow } from '../interfaces/tv-show.interface';
import { Observable } from 'rxjs';
import { YearOnlyPipe } from '../pipes/year-only.pipe';

@Component({
  selector: 'app-tv-show-table',
  standalone: true,
  imports: [CommonModule, YearOnlyPipe],
  templateUrl: './tv-show-table.component.html',
  styleUrls: ['./tv-show-table.component.css']
})
export class TvShowTableComponent implements OnInit {
  
  //tvShows: TvShow[] = [];
  tvShows$!: Observable<TvShow[]>;
  
  constructor(private tvShowsService: TvShowsService) {
    // tvShowsService.getTvShows().subscribe((res: TvShow[])=>{
    //   this.tvShows = res;
    // });
    //this.tvShows$ = tvShowsService.getTvShows();
  }
  ngOnInit(): void {
    this.tvShows$ = this.tvShowsService.getTvShows();
    this.tvShows$.subscribe(data => {
      console.log('TV Shows Data:', data);
    });
  }


}
