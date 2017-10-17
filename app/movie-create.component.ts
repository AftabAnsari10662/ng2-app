import { Component, Injectable, OnInit } from '@angular/core'
import { Movie } from "./movie.model"
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { MovieData } from "./movie.service";
@Component({
  selector: 'movie-create',
  templateUrl: 'app/movie-create.component.html',
  styleUrls: ['app/movie-create.component.css']
})

@Injectable()
export class CreateMovieComponet implements OnInit {
  model: Movie;
  movieId: string;
  constructor(
    private movieData: MovieData,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.model = new Movie("", "");
    this.movieId = this.route.snapshot.paramMap.get("id");

  }

  createMovie(formValues) {
    console.log(formValues.value);
    this.movieData.create(formValues)
      .subscribe(movie => console.log(movie),
      error => console.log(error));
  }
  goToMovieList() {
    this.router.navigate(["movies"]);
  }
}