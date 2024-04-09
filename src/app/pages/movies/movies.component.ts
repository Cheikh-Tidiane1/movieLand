import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemComponent } from "../../components/item/item.component";

@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
    imports: [ItemComponent]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesServiceService) {}
  ngOnInit(): void {
    this.movieService
      .searchMovies(1)
      .subscribe((movies) => (this.movies = movies));
  }
}
