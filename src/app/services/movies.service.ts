import { Injectable } from '@angular/core';
import data from '../../assets/json/data/data.json';
import { IMovie } from '../models/movie';
import { Genre } from '../models/genre';
import { MovieOrNull } from 'src/app/models/MovieOrNull';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: IMovie[] = data

  getAll(): IMovie[] {
    return this.movies;
  }

  getBest(): MovieOrNull {
    let currentBestMovie = localStorage.getItem('bestMovie');
    return this.movies.filter(m => m.id.toString() === currentBestMovie)[0];
  }

  isBest(movie: IMovie): boolean {
    return movie === this.getBest();
  }

  makeGenreString ({genre}: IMovie): string {
    let result = [];
  
    for (let g of genre) {
      result.push(Genre[g]);
    }
  
    return result.join(', ');
  }

  onMovieLike(id: number, e: Event): void {
    e.stopImmediatePropagation();
    let currentBestMovie: string | null = localStorage.getItem('bestMovie');
    
    // if clicked on already choosen film
    if (currentBestMovie && currentBestMovie === id.toString()) {
      localStorage.clear();
      // for some reason its not working
      // change the state bestMovie
      // but no rerender, so I left
      // the location.reload() fn
      // that's a bad practice, I know
  
      // this.bestMovie = null
  
      location.reload();
      return  
    };
  
    localStorage.clear();
    localStorage.setItem('bestMovie', id.toString());
    // this.bestMovie = id.toString()
    location.reload();
  }
}
