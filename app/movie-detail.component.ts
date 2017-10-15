import { Router } from "@angular/router";

import { Component, Injectable, OnInit } from "@angular/core";

@Component(
    {
        templateUrl:"./app/movie-detail.component.html",

    }
)

@Injectable()
export class MovieDetailsComponent implements OnInit {

    constructor(private _router: Router) {

    }
    ngOnInit() {


    }

}