import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Movie,
  MovieCredits,
  MovieDto,
  MovieImages,
  MovieVideo,
  MovieVideoDto,
} from '../models/movies';
import { Observable, of, switchMap } from 'rxjs';
import { Genre, GenresDto } from '../models/genres';
import { Tv, TvDto } from '../models/tv';
@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '1a484aa47d89f6331c855cf5d0229ca5';
  constructor(private http: HttpClient) {}

  getMovies(
    type: string = 'upcoming',
    count: number = 12
  ): Observable<Movie[]> {
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
  getMovie(id: string): Observable<Movie> {
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
          return of(res.results.slice(0, 3));
        })
      );
  }

  getMovieGenres(): Observable<Genre[]> {
    return this.http
      .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }

  getMoviesByGenre(genreId: string, pageNumber: number): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string): Observable<MovieImages> {
    return this.http.get<MovieImages>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieCredits(id: string): Observable<MovieCredits> {
    return this.http.get<MovieCredits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  searchMovies(page: number, searchValue?: string): Observable<Movie[]> {
    const uri = searchValue ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}&language=fr-Fr`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getTvs(type: string = 'latest', count: number = 12): Observable<Tv[]> {
    return this.http
      .get<TvDto>(
        `${this.baseUrl}/tv/${type}?api_key=${this.apiKey}&language=fr-Fr`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  getMovieSimilar(id: string): Observable<Movie[]> {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, 12));
        })
      );
  }
}
