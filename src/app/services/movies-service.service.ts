import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto } from '../models/movies';
import { Observable, of, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '1a484aa47d89f6331c855cf5d0229ca5';
  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming',count: number = 12): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}&language=fr-Fr`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
  searchMovies(page: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}&language=fr-Fr`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
