import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Movie } from "./movie.model"
@Component({
  selector: 'movie-create',
  templateUrl: 'app/movie-create.component.html'
})

@Injectable()
export class CreateMovieComponet {
 model:Movie;
  constructor(private httpClient: HttpClient) {
    this.model = new Movie("","");
  }

  createMovie(formValues) {
    console.log(formValues.value);
  }
}