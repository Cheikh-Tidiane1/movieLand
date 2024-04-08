import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { JsonPipe } from '@angular/common';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemsBannerComponent } from '../../components/items-banner/items-banner.component';
import { Movie } from '../../models/movies';
@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SliderComponent, JsonPipe, ItemsBannerComponent],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  constructor(private moviesService: MoviesServiceService) {}
  ngOnInit(): void {
    this.moviesService.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.moviesService.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.moviesService.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
