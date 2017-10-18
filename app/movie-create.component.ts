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
    this.model = new Movie(0, "", 0);
    this.movieId = this.route.snapshot.paramMap.get("id");

    if (this.movieId) {
      this.movieData.getById(this.movieId)
        .subscribe((movie) => this.model = new Movie(movie.movieId,
          movie.title,
          movie.releaseYear),
        error => console.log(error))
    }
  }

  createMovie(formValues) {
    console.log(formValues.value);

    if (this.movieId) {
      let movie: Movie = new Movie(formValues.value.movieId,
        formValues.value.title,
        formValues.value.releaseYear);

      this.movieData.save(movie).subscribe((movie) => {
        console.log(movie);
        this.goToMovieList();
      }, (error) => {
        console.log(error);
      })
    }
    else {
      let movie: Movie = new Movie(0,
        formValues.value.title,
        formValues.value.releaseYear);
      this.movieData.create(movie)
        .subscribe(movie => {
          console.log(movie);
          this.goToMovieList();
        },
        error => console.log(error));
    }

  }
  goToMovieList() {
    this.router.navigate(["movies"]);
  }
}