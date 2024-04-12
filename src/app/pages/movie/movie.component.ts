import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movies';
import { MoviesServiceService } from '../../services/movies-service.service';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { SliderComponent } from "../../components/slider/slider.component";
import { TabViewModule } from 'primeng/tabview';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrl: './movie.component.scss',
    imports: [DatePipe, SliderComponent,TabViewModule,UpperCasePipe,CurrencyPipe]
})
export class MovieComponent implements OnInit {
  movie: Movie;
  imazeSizes = IMAGES_SIZES;

  constructor(private route: ActivatedRoute,private movieService: MoviesServiceService) {}
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
