import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { GenresComponent } from './pages/genres/genres.component';

export const routes: Routes = [
    {path: '' ,component: HomeComponent , title: "Home"},
    {path: 'movies' ,component: MoviesComponent , title: "Movies"},
    {path: 'movie/:id' ,component: MovieComponent , title: "Movie"},
    {path: 'genres' ,component: GenresComponent , title: "Genres"},
    {path: '**' ,redirectTo: ''},

];
