export class Movie{

    public movieId:string;
    public title:string;
    public releaseYear:string;
    constructor(title:string, relaseYear:string){
        this.title = title;
        this.releaseYear = relaseYear;
    }
}