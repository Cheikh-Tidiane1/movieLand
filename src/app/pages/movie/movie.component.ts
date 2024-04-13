import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo } from '../../models/movies';
import { MoviesServiceService } from '../../services/movies-service.service';
import {
  JsonPipe,
  DatePipe,
  UpperCasePipe,
  CurrencyPipe,
  CommonModule,
} from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { TabViewModule } from 'primeng/tabview';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { VideoEmbedComponent } from '../../components/video-embed/video-embed.component';
import { DurationPipe } from "../../pipes/duration.pipe";

@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
    imports: [
        DatePipe,
        SliderComponent,
        TabViewModule,
        UpperCasePipe,
        CurrencyPipe,
        JsonPipe,
        VideoEmbedComponent,
        CommonModule,
        DurationPipe
    ]
})
export class MovieComponent implements OnInit {
  movie: Movie;
  imazeSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }

  getMovie(id: string) {
    this.movieService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(id: string) {
    this.movieService.getMovieVideos(id).subscribe((movieVideosData) => {
      this.movieVideos = movieVideosData;
    });
  }
}
