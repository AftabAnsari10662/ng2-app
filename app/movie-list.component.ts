import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Movie } from "./movie.model"

import { MovieData } from "./movie.service";
@Component({
    selector: 'movie-list',
    templateUrl: 'app/movie-list.component.html'
})

@Injectable()
export class MovieListComponent {
    movies: Movie[];
     error: any;
    constructor(private httpClient: HttpClient, movieData: MovieData) {
        movieData.getAllMovies()
            .subscribe(movies => this.movies = movies,
            error => this.error = error);
    }

}