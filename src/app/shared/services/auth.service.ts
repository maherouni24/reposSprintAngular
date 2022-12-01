import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8000/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string,   first_name: string,
    last_name: string,
    role: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      
      username,
      email,
      first_name,
      last_name,
      role,
      password
     
    }, httpOptions);
  }
  forget(email:string): Observable<any> {
    return this.http.put(AUTH_API + 'forget', {
      email
    }, httpOptions);
  }
 

  
}
