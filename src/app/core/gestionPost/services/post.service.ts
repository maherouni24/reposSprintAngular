import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/model/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string=environment.url+"/post";
  constructor(private http:HttpClient) { }

  getPost():Observable<Post[]>{ 
    return this.http.get<Post[]>(this.postUrl+'/fetch');
  }
  addPost(data:Post):Observable<Post>{
    return this.http.post<Post>(this.postUrl+'/add',data)
  }
  updatePost(id:number,data:Post):Observable<Post>{
    return this.http.put<Post>(this.postUrl+'/update/'+id,data)
  }
  removePost(id:number){
    return this.http.delete(this.postUrl+'/remove/'+id)
  }
}
