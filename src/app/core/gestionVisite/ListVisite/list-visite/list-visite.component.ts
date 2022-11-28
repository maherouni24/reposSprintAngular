import { Component, OnInit } from '@angular/core';
import { VisiteService } from '../../services/visite.service';

@Component({
  selector: 'app-list-visite',
  templateUrl: './list-visite.component.html',
  styleUrls: ['./list-visite.component.css']
})
export class ListVisiteComponent implements OnInit {
  title:string='la liste des visites';
  ListVisites:any;
  constructor(private v :VisiteService) { }

  ngOnInit(): void {
    this.v.getVisite().subscribe(
      (data)=>{
        this.ListVisites=data;
        console.log(data);
      }
    )
  }
  like(v: any) {
    v.like++;
    this.v.updateVisite(v.id,v).subscribe(()=>{
    })  
  }
  dislike(v: any) {
    v.dislike++;
    this.v.updateVisite(v.id,v).subscribe(()=>{
    })  
  }
}
