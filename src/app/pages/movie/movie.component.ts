import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movies';
import { MoviesServiceService } from '../../services/movies-service.service';
import { JsonPipe } from '@angular/common';
import { SliderComponent } from "../../components/slider/slider.component";
@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
    imports: [JsonPipe, SliderComponent]
})
export class MovieComponent implements OnInit {
  movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
}
