import { Component } from '@angular/core'
import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

@Injectable()
export class AppComponent {
  name: string;
  movies: any;
  constructor(private httpClient: HttpClient) {
    this.name = "Aftab Ansari"
    this.httpClient.get("app/movies.json")
      .subscribe(data => {
        // Read the result field from the JSON response.
        this.movies = data;
        console.log(this.movies); 
      });
  }

  createMovie(formValues){
    console.log(formValues.value);
  }
}