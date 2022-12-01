import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/shared/services/reclamation';
import { ReclamationService } from 'src/app/shared/services/reclamation.service';

@Component({
  selector: 'app-allreclamation',
  templateUrl: './allreclamation.component.html',
  styleUrls: ['./allreclamation.component.css']
})
export class AllreclamationComponent implements OnInit {

  public rec: any;
  
 
  constructor(private token: ReclamationService) { }

  ngOnInit(): void {
    this.token.getallReclamation().subscribe(
      (data)=>{
         this.rec=data;
         this.rec=this.rec.reclamations;
         console.log(this.rec.reclamations)
        }
    )
  }
  tarite(reclamation:Reclamation):void{
    let i=this.rec.indexOf(reclamation);
    console.log(this.rec[i])
    this.rec[i].statut=true;
   this.token.traiterReclamation(this.rec[i]).subscribe()
  }
}
