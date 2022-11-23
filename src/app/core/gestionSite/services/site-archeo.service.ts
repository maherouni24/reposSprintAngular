import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteArcheologique } from 'src/app/model/SiteArcheologique';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiteArcheoService {
  sitearcheoUrl:string=environment.url+"/s";

  constructor(private http:HttpClient) { }

  getSiteArcheo():Observable<SiteArcheologique[]>{ 
    return this.http.get<SiteArcheologique[]>(this.sitearcheoUrl+'/fetch');
  }
  addSiteArcheo(data:SiteArcheologique):Observable<SiteArcheologique>{
    return this.http.post<SiteArcheologique>(this.sitearcheoUrl+'/add',data)
  }
  updateSiteArcheo(id:number,data:SiteArcheologique):Observable<SiteArcheologique>{
    return this.http.put<SiteArcheologique>(this.sitearcheoUrl+'/update/'+id,data)
  }
  removeSiteArcheo(id:number){
    return this.http.delete(this.sitearcheoUrl+'/remove/'+id)
  }
}
