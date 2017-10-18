import { Router } from "@angular/router";

import { Component, Injectable, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { MovieData } from "./movie.service";
import { Movie } from "./movie.model";

@Component(
    {
        templateUrl: "./app/movie-detail.component.html",

    }
)

@Injectable()
export class MovieDetailsComponent implements OnInit {
    movieId: string;
    movie: Movie;
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _movieData: MovieData) {
        this._activatedRoute.params.subscribe(p => this.loadMovie(p["id"]));

    }

    loadMovie(movieId: any) {
        this.movieId = movieId;
        this._movieData.getById(this.movieId)
            .subscribe((movie: Movie) => {
                this.movie = movie;
            },
            (error) => {
                console.log(error);
            })
    }

    ngOnInit(): void {
        this.movieId = "";
    }
}