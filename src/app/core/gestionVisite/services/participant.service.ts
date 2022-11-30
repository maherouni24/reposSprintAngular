import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from 'src/app/model/participant';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  visiteUrl:string=environment.url+"/participant";
  constructor(private http:HttpClient) { }

  addParticipation(data:Participant):Observable<Participant>{
    return this.http.post<Participant>(this.visiteUrl+'/participate',data)
  }
}
