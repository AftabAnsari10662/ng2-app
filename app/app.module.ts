import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MovieListComponent } from "./movie-list.component";
import { CreateMovieComponet } from "./movie-create.component"

@NgModule({
    imports:
    [
        BrowserModule,
        HttpClientModule,
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
    bootstrap: [AppComponent],
})
export class AppModule { }