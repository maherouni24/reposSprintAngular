import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { User } from './user';
import { Blog } from './blog';



const AUTH_API = 'http://localhost:8000/user/';
const auth_token = window.sessionStorage.getItem('auth-token');
let usersession = window.sessionStorage.getItem('auth-user');
const token: TokenStorageService = new TokenStorageService();
let user:User =  token.getUser();
const username = user?.username;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Authorization': `Bearer ${auth_token}` })
};
@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }
  addblog(decription: string,b:Blog): Observable<any> {
    return this.http.post(AUTH_API + 'blog/comment/' +username+'/'+b.id, {
      decription}, httpOptions);
  }
}
