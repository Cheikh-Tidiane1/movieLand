import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieDto, MovieImages, MovieVideo, MovieVideoDto } from '../models/movies';
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
  getMovie(id: string):Observable<Movie> {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=fr-Fr`
    );
  }

  getMovieVideos(id: string): Observable<MovieVideo[]> {
    return this.http
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0,3));
        })
      );
  }

  getMovieImages(id: string): Observable<MovieImages> {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
  }
  
  searchMovies(page: number): Observable<Movie[]> {
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
