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
        private _activatedRouter: ActivatedRoute) {

    }
    ngOnInit() {
        this.movieId = this._activatedRouter.snapshot.paramMap.get("id");

    }

}