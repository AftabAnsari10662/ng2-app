
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Injectable, Component } from "@angular/core";
import { MovieData } from "./movie.service";

import { Movie } from "./movie.model";
@Component({
    selector: 'movie-delete',
    templateUrl: "app/movie-delete.component.html"
})

@Injectable()
export class DeleteMovieComponent {

    movie: Movie;
    movieId: string;
    constructor(
        private movieData: MovieData,
        private route: ActivatedRoute,
        private router: Router) {
        this.movieId = this.route.snapshot.paramMap.get("id");
        this.loadMovie(this.movieId);
    }
    loadMovie(movieId: string): void {
        this.movieData.getById(movieId)
            .subscribe((movie: Movie) => {
                this.movie = movie;
            }, (error) => console.log(error));
    }

    deleteMovie() {
        this.movieData.delete(this.movie.movieId)
            .subscribe((data) => {
                this.router.navigate(["movies"]);
            }, (error) => console.log("error"));
    }

    goToList(): void {
        this.router.navigate(["movies"]);
    }
}