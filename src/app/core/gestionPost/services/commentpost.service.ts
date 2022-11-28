import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentPost } from 'src/app/model/commentpost';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentpostService {
  commentpostUrl:string=environment.url+"/commentpost";
  constructor(private http:HttpClient) { }

  getCommentPost(id:number){ 
    return this.http.get(this.commentpostUrl+'/comments/'+id);
  }
  addCommentPost(data:CommentPost):Observable<CommentPost>{
    return this.http.post<CommentPost>(this.commentpostUrl+'/add',data)
  }
}
