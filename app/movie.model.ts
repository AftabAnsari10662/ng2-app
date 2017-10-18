export class Movie{

    public movieId:number;
    public title:string;
    public releaseYear:number;
    constructor(movieId:number,title:string, releaseYear:number){
        this.movieId = movieId;
        this.title = title;
        this.releaseYear = releaseYear;
    }
}