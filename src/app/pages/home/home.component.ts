import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { JsonPipe } from '@angular/common';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemsBannerComponent } from "../../components/items-banner/items-banner.component";
import { Movie } from '../../models/movies';
@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SliderComponent, JsonPipe, ItemsBannerComponent]
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  constructor(private moviesService: MoviesServiceService) {}
  ngOnInit(): void {
    this.moviesService
      .getMovies('popular')
      .subscribe((response: any) => {
        this.popularMovies = response.results
    });
    this.moviesService
      .getMovies('top_rated')
      .subscribe((response: any) => {
        this.topRatedMovies = response.results
    });
    this.moviesService
      .getMovies('upcoming')
      .subscribe((response: any) => {
        this.upcomingMovies = response.results
    });
  }
}
