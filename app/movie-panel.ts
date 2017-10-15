import {Component, Input, OnInit} from "@angular/core";
import {Movie} from "./movie.model";

@Component({
    selector: "movie-panel",
    templateUrl: "./app/movie-panel.html"
})
export class MoviePanelComponent implements OnInit {
    @Input() movie: Movie;
    ngOnInit() {

         // ...
    }

}