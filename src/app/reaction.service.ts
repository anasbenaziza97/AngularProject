import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentPost} from "./models/CommentPost";
import {Reaction} from "./models/Reaction";

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  private baseUrl = 'http://localhost:8081/api/v1';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }
  addLike(reaction, idPost, idUser): Observable<Reaction> {
    return this.http.put<Reaction>(this.baseUrl + '/addLike/' + idPost + '/' + idUser, JSON.stringify(reaction), this.httpOptions);
  }
  addDislike(reaction, idPost, idUser): Observable<Reaction> {
    return this.http.put<Reaction>(this.baseUrl + '/addDislike/' + idPost + '/' + idUser, JSON.stringify(reaction), this.httpOptions);
  }
}
