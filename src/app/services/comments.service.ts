import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataComment, NewFormContentDTO } from '../models/types';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = "https://jsonplaceholder.typicode.com"

  public postId : boolean = false;

  constructor(private http : HttpClient) { }

  getComments() : Observable<DataComment[]>{
    return this.http.get<DataComment[]>(this.url + "/comments")
  }

  getSingleComment(id : string) : Observable<DataComment[]>{
    return this.http.get<DataComment[]>(this.url +"/comments?id=" + id)
  }

  clickOnPostId(){
    return this.postId = true;
  }

  getGroupComments(id : number) : Observable<DataComment[]>{ 
    return this.http.get<DataComment[]>(this.url + "/comments?postId=" + id)
  }

  addNewPost(post : NewFormContentDTO){
    console.log(post)
    return this.http.post<DataComment[]>("http://localhost:3000/articoli", post) //link al mio server interno
  }
}
