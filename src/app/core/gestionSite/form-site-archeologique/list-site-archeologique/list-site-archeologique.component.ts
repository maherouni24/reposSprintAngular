import { Component, OnInit } from '@angular/core';
import { SiteArcheologique } from 'src/app/model/SiteArcheologique';
import { SiteArcheoService } from '../../services/site-archeo.service';

@Component({
  selector: 'app-list-site-archeologique',
  templateUrl: './list-site-archeologique.component.html',
  styleUrls: ['./list-site-archeologique.component.css']
})
export class ListSiteArcheologiqueComponent implements OnInit {
  title: string = 'la liste de sites archeologiques'

  listSitesArcheologiques: any;

  constructor(private s :SiteArcheoService) { }

  ngOnInit(): void {
    this.s.getSiteArcheo().subscribe(
      (data)=>{this.listSitesArcheologiques=data;
        console.log(data);
      }
     );
  }
  //like(id: number) {
    //this.listSitesArcheologiques.map((s) => {
      //return s.id === id && s.like++;
    //})
  //}

}
