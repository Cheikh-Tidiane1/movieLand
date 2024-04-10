import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
    {path: '' ,component: HomeComponent , title: "Home"},
    {path: 'movies' ,component: MoviesComponent , title: "Movies"},
    {path: 'movie' ,component: MovieComponent , title: "Movie"},
    {path: '**' ,redirectTo: ''},

];
