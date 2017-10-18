
import { ActivatedRoute, Router } from "@angular/Router";
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
    constructor(
        // private activatedRoute: ActivatedRoute,
        // private router: Router,
        private movieData: MovieData) {

        // this.activatedRoute.params
        //     .subscribe(param => this.loadMovie(param["id"]));
    }
    loadMovie(movieId: string): void {
        this.movieData.getById(movieId)
            .subscribe((movie: Movie) => {
                this.movie = movie;
            }, (error) => console.log(error));
    }

    // deleteMovie() {
    //     this.movieData.delete(this.movie.movieId)
    //         .subscribe((data) => {
    //             this.router.navigate(["movies"]);
    //         }, (error) => console.log("error"));
    // }

}