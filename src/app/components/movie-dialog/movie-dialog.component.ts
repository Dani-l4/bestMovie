import { Component, OnInit, Inject } from '@angular/core';
import { IMovie } from 'src/app/models/movie';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  
  movie: IMovie
  genre: string
  isBest: boolean

  constructor(
    private dialogRef: MatDialogRef<MovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: {
        movie: IMovie,
        genre: string
    },
    protected moviesService: MoviesService
  ) {
      this.movie = data.movie;
      this.genre = data.genre;
    }

  ngOnInit(){
    this.genre = this.moviesService.makeGenreString(this.movie);
    this.isBest = this.moviesService.isBest(this.movie);
  }

  close() {
    this.dialogRef.close();
  }
}