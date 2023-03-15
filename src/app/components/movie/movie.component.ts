import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { Genre } from 'src/app/models/genre';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() movie: IMovie
  genre: string
  icon: string = 'favorite_outline'
  
  makeGenreString ({genre}: IMovie): string {
    let result = [];

    for (let g of genre) {
      result.push(Genre[g]);
    }

    return result.join(', ');
  }

  ngOnInit(): void {
    this.genre = this.makeGenreString(this.movie)
  }

  chooseFavorite (newIcon: string): void {
    this.icon = newIcon
  }
}

