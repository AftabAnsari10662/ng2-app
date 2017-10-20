import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from "./movie-list.component";
import { CreateMovieComponet } from "./movie-create.component"

import { MovieData } from "./movie.service";
import { MovieGuardService } from "./movie-guard.service";

import { MovieDetailsComponent } from "./movie-detail.component";
import { MoviePanelComponent } from "./movie-panel";
import { DeleteMovieComponent } from "./movie-delete.component";
import { NavMenuComponent } from "./navmenu.component";

import { routes } from "./routes";

@NgModule({
    imports:
    [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    declarations: [
        AppComponent,
        CreateMovieComponet,
        MovieListComponent,
        MovieDetailsComponent,
        MoviePanelComponent,
        DeleteMovieComponent,
        NavMenuComponent
    ],
    providers: [MovieData, MovieGuardService],
    bootstrap: [AppComponent],

})
export class AppModule { }