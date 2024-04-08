import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movies';
@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '1a484aa47d89f6331c855cf5d0229ca5';
  constructor(private http: HttpClient) {}

  getMovies(type: string = "upcoming") {
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    );
  }
}
