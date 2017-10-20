import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list.component";
import { CreateMovieComponet } from "./movie-create.component"

import { MovieData } from "./movie.service";
import { MovieGuardService } from "./movie-guard.service";

import { MovieDetailsComponent } from "./movie-detail.component";
import { DeleteMovieComponent } from "./movie-delete.component";
export let routes = [
    {
        path: 'home',
        component: MovieListComponent
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
        path: "movies/delete/:id",
        component: DeleteMovieComponent
    },
    {
        path: "", redirectTo: "movies", pathMatch: "full"
    },
    {
        path: "**", redirectTo: "movies", pathMatch: "full"
    }
];