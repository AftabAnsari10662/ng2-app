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
import { MovieGuardService } from "./movie-guard.service";

import { MovieDetailsComponent } from "./movie-detail.component";

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
                component: MovieListComponent,
                children: [
                    {
                        path: "details/:id",
                        component: MovieDetailsComponent
                    }
                ]
            },
            {
                path: "movies/edit/:id",
                component: CreateMovieComponet,
                canActivate: [MovieGuardService]
            },
            {
                path: "", redirectTo: "movies", pathMatch: "full"
            },
            {
                path: "**", redirectTo: "movies", pathMatch: "full"
            }
        ])
    ],
    declarations: [
        AppComponent,
        CreateMovieComponet,
        MovieListComponent,
        MovieDetailsComponent
    ],
    providers: [MovieData, MovieGuardService],
    bootstrap: [AppComponent],

})
export class AppModule { }