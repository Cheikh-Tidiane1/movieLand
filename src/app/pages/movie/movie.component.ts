import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Movie,
  MovieCredits,
  MovieImages,
  MovieVideo,
} from '../../models/movies';
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
import { DurationPipe } from '../../pipes/duration.pipe';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { ItemsBannerComponent } from "../../components/items-banner/items-banner.component";

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
        DurationPipe,
        ImageModule,
        CarouselModule,
        ItemsBannerComponent
    ]
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie;
  imazeSizes = IMAGES_SIZES;
  movieVideos: MovieVideo[] = [];
  moviesImages: MovieImages;
  movieCredits: MovieCredits;
  similarMovies: Movie[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesServiceService
  ) {}

  ngOnDestroy(): void {
    console.log('component destroyed');
  }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovies(id);
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
      console.log(this.movieVideos);
    });
  }

  getMovieImages(id: string) {
    this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
      this.moviesImages = movieImagesData;
    });
  }

  getMovieCredits(id: string) {
    this.movieService.getMovieCredits(id).subscribe((movieCreditsData) => {
      this.movieCredits = movieCreditsData;
    });
  }

  getSimilarMovies(id: string) {
    this.movieService.getMovieSimilar(id).subscribe((movieSimilarData) => {
      this.similarMovies = movieSimilarData;
    });
  }
}
