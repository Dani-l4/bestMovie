import { Component } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import data from '../../../assets/json/data/data.json';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  movies: IMovie[] = data
}
