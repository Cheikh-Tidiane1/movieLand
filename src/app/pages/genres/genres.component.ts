import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../../services/movies-service.service';
import { Genre } from '../../models/genres';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private movieService: MoviesServiceService) {}
  ngOnInit() {
    this.movieService.getMovieGenres().subscribe((genresData) => {
      this.genres = genresData;
    });
  }
}
