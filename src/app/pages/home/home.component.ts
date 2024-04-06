import { Component, OnInit } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { JsonPipe } from '@angular/common';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemsBannerComponent } from "../../components/items-banner/items-banner.component";
@Component({
    selector: 'home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [SliderComponent, JsonPipe, ItemsBannerComponent]
})
export class HomeComponent implements OnInit {
  movies: any = [];
  constructor(private moviesService: MoviesServiceService) {}
  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((response: any) => {
        this.movies = response.results
        console.log(this.movies);
    });
  }
}
