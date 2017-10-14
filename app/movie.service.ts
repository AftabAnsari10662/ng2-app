import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from './movie.model';

export interface IMovie {
    title: string;
    releaseYear: string;
}

let parseResponse = r => r.json();
let toMovie = m => new Movie(m.title, m.releaseYear);

@Injectable()
export class MovieData {

    constructor(private http: HttpClient) {

    }

    getById(id: string):Observable<Movie> {
        return this.http.get<Movie>(`/api/movies/${id}`);
    }

    getAllMovies(): Observable<IMovie[]> {
        return this.http.get<IMovie[]>("app/movies.json");
    }

    // save(movie: Movie) {
    //     return this.http.put("/api/movies", movie)
    //         .map(parseResponse)
    //         .map(toMovie);

    // }

    create(movie: IMovie) {
        return this.http.post<IMovie>("/api/movies", movie);
    }


}