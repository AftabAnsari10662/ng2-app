import { Component } from '@angular/core'
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Movie } from "./movie.model"
@Component({
    selector: 'movie-list',
    templateUrl: 'app/movie-list.component.html'
})

@Injectable()
export class MovieListComponent {
    movies: any;
    constructor(private httpClient: HttpClient) {
        this.httpClient.get("app/movies.json")
            .subscribe(data => {
                this.movies = data;
                console.log(this.movies);
            });
    }

}