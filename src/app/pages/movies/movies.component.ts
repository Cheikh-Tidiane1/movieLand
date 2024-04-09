import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemComponent } from "../../components/item/item.component";
import { PaginatorModule } from 'primeng/paginator';
@Component({
    selector: 'app-movies',
    standalone: true,
    templateUrl: './movies.component.html',
    styleUrl: './movies.component.scss',
    imports: [ItemComponent,PaginatorModule]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MoviesServiceService) {}
  ngOnInit(): void {
    this.getPageMovies(1)
  }

  getPageMovies(page: number){
    this.movieService
    .searchMovies(page)
    .subscribe((movies) => (this.movies = movies));
  }
  paginate(event: any){
    this.getPageMovies(event.page + 1)
  }
}
