import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TvShow } from './interfaces/tv-show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http: HttpClient) { }

  getTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>("https://www.episodate.com/api/search").pipe(
      map((response: any) => response.tv_shows)
    );
  }

  searchTvShowsByName(searchTerm: string): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(`https://www.episodate.com/api/search?q=${searchTerm}&page=1`).pipe(
      map((response: any) => response.tv_shows)
    );
  }
}
