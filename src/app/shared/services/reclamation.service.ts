import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { User } from './user';
import { Reclamation } from './reclamation';




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
export class ReclamationService {
  
  constructor(private http: HttpClient) { }

  addReclamation(object: string, message: string): Observable<any> {
    return this.http.post(AUTH_API + 'reclamation/add/' +username, {
      object,
      message
    }, httpOptions);
  }
  getReclamationbById(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'reclamation/get/' +username, httpOptions)
  }

  getallReclamation(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + 'reclamation/getall/' +username, httpOptions)
  }
  traiterReclamation(r:Reclamation) {
    return this.http.put(AUTH_API + 'reclamation/approve/' +username+'/'+r.id,r, httpOptions)
  }


  
}
