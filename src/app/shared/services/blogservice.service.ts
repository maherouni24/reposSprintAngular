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
export class BlogserviceService {
  

  constructor(private http: HttpClient) { }
  addblog(Titre: string, decription: string): Observable<any> {
    return this.http.post(AUTH_API + '/blog/add/' +username, {
      Titre,
      decription,
    }, httpOptions);
  }
  getallblog(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'blog/getall/' +username, httpOptions)
  }
  deleteblog(id:number){
    return this.http.delete(AUTH_API + 'blog/delete/' +username+id, httpOptions)
  }
  Updateblog(
    Titre: string,
    decription: string,
   
    id: number
  ) {
    return this.http.put(
      AUTH_API + '/blog/update/' + username + '/' + id,
      {
        Titre,
        decription,
      },
      httpOptions
    );
  }
}
