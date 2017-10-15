import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list.component";
import { CreateMovieComponet } from "./movie-create.component"

import { MovieData } from "./movie.service";
import { MovieGuardService } from "./movie-guard.service";

import { MovieDetailsComponent } from "./movie-detail.component";

export let routes = [
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
        ];