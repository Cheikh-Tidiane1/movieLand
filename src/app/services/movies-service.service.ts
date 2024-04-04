import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=1a484aa47d89f6331c855cf5d0229ca5'
    );
  }
}
