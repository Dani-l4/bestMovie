import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MatDialog } from "@angular/material/dialog";
import { MovieDialogComponent } from '../movie-dialog/movie-dialog.component';
import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() movie: IMovie
  genre: string
  icon: string = 'favorite_outline'

  constructor(
    public dialog: MatDialog,
    protected moviesService: MoviesService
    ) {}

  openDialog(): void {
    this.dialog.open(MovieDialogComponent, {
      scrollStrategy: new NoopScrollStrategy(),
      autoFocus: 'dialog',
      data: {
        movie: this.movie,
        genre: this.genre
      }
    });
  }
  
  ngOnInit(): void {
    this.genre = this.moviesService.makeGenreString(this.movie);

    if (this.moviesService.isBest(this.movie)) {
      this.icon = 'favorite';
    }
  }
}
