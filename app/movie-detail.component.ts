import { Router } from "@angular/router";

import { Component, Injectable, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

@Component(
    {
        templateUrl: "./app/movie-detail.component.html",

    }
)

@Injectable()
export class MovieDetailsComponent implements OnInit {
    movieId: string;
    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute) {
        this._activatedRoute.params.subscribe(p => this.loadMovie(p["id"]));

    }

    loadMovie(movieId: any) {
        this.movieId = movieId;
    }

    ngOnInit(): void {
        this.movieId = "";
    }
}