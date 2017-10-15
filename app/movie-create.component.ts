import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Movie } from "./movie.model"

import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: 'movie-create',
  templateUrl: 'app/movie-create.component.html',
  styleUrls: ['app/movie-create.component.css']
})

@Injectable()
export class CreateMovieComponet {
  model: Movie;
  movieId: string;
  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {

    this.model = new Movie("", "");
    this.movieId = this.route.snapshot.paramMap.get("id");
    // alert(this.movieId);

  }

  createMovie(formValues) {
    console.log(formValues.value);
  }
  goToMovieList(){
    this.router.navigate(["movies"]);
  }
}