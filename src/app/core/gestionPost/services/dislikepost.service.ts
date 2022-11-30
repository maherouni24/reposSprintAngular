import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DislikePost } from 'src/app/model/dislikepost';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DislikepostService {
  dislikepostUrl:string=environment.url+"/dislikepost";
  constructor(private http:HttpClient) { }

  adddislikePost(data:DislikePost):Observable<DislikePost>{
    return this.http.post<DislikePost>(this.dislikepostUrl+'/add',data)
  }
}
