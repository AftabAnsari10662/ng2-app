import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from "./movie-list.component";
import { CreateMovieComponet } from "./movie-create.component"

import { MovieData } from "./movie.service";

@NgModule({
    imports:
    [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'home',
                component: AppComponent
            },
            {
                path: "createMovies",
                component: CreateMovieComponet
            },
            {
                path: "movies",
                component: MovieListComponent
            }
        ])
    ],
    declarations: [AppComponent, CreateMovieComponet, MovieListComponent],
    providers:[MovieData],
    bootstrap: [AppComponent],

})
export class AppModule { }