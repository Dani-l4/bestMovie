import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieOrNull } from 'src/app/models/MovieOrNull';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[]
  bestMovie: MovieOrNull
  
  constructor(protected moviesService: MoviesService) {}

  ngOnInit(): void {
    // getting all of the movies
    this.movies = this.moviesService.getAll();
    // defining the best
    this.bestMovie = this.moviesService.getBest();
  }
}
