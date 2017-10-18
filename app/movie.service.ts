import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Movie } from './movie.model';

export interface IMovie {
    movieId: number;
    title: string;
    releaseYear: number;
}

let parseResponse = r => r.json();

let baseUrl = 'http://moviestorecore.azurewebsites.net/api/movies';
@Injectable()
export class MovieData {

    constructor(private http: HttpClient) {

    }

    getById(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${baseUrl}/${id}`);
    }

    getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(baseUrl);
    }

    save(movie: Movie) {
        return this.http.put(`${baseUrl}/${movie.movieId}`, movie);

    }

    create(movie: Movie) {
        return this.http.post<IMovie>(baseUrl, movie);
    }

   delete(id:number){
       return this.http.delete(`${baseUrl}/${id}`);
   }
}