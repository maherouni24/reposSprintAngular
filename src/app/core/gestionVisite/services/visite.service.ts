import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Visite } from 'src/app/model/Visite';
@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  visiteUrl:string=environment.url+"/v";
  constructor(private http:HttpClient) { }

  getVisite():Observable<Visite[]>{ 
    return this.http.get<Visite[]>(this.visiteUrl+'/fetch');
  }
  addVisite(data:Visite):Observable<Visite>{
    return this.http.post<Visite>(this.visiteUrl+'/add',data)
  }
  updateVisite(id:number,data:Visite):Observable<Visite>{
    return this.http.put<Visite>(this.visiteUrl+'/update/'+id,data)
  }
  removeVisite(id:number){
    return this.http.delete(this.visiteUrl+'/remove/'+id)
  }
}
