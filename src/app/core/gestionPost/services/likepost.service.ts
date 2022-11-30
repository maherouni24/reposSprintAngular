import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LikePost } from 'src/app/model/likepost';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikepostService {
  likepostUrl:string=environment.url+"/likepost";

  constructor(private http:HttpClient) { }

  addlikePost(data:LikePost):Observable<LikePost>{
    return this.http.post<LikePost>(this.likepostUrl+'/add',data)
  }
}
