import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movies';
import { InputTextModule } from 'primeng/inputtext';
import { MoviesServiceService } from '../../services/movies-service.service';
import { ItemComponent } from '../../components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
@Component({
  selector: 'app-movies',
  standalone: true,
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
  imports: [ItemComponent, PaginatorModule,InputTextModule],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genresId: string;
  searValue: string;
  constructor(
    private movieService: MoviesServiceService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe(({ genresId }) => {
      if (genresId) {
        this.getMoviesByGenres(genresId, 1);
        this.genresId = genresId;
      } else {
        this.getPageMovies(1);
      }
    });
  }

  getPageMovies(page: number, searchKeyWord?: string) {
    this.movieService
      .searchMovies(page,searchKeyWord)
      .subscribe((movies) => (this.movies = movies));
  }

  getMoviesByGenres(genresId: string, page: number) {
    this.movieService
      .getMoviesByGenre(genresId, page)
      .subscribe((movies) => (this.movies = movies));
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genresId) {
      this.getMoviesByGenres(this.genresId, pageNumber);
    } else {
      this.getPageMovies(pageNumber);
    }
  }

  searchChanged(){
    this.getPageMovies(1,this.searValue)
  }


}
