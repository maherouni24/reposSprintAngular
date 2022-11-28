import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteArcheologique } from 'src/app/model/SiteArcheologique';
import { SiteArcheoService } from '../services/site-archeo.service';

@Component({
  selector: 'app-form-site-archeologique',
  templateUrl: './form-site-archeologique.component.html',
  styleUrls: ['./form-site-archeologique.component.css']
})
export class FormSiteArcheologiqueComponent implements OnInit {
  siteArcheologique:SiteArcheologique=new SiteArcheologique();
  listSitesArcheologiques: any;
  constructor(private s :SiteArcheoService , private router:Router) { }

  ngOnInit(): void {
  }
  ajoutSite():void{
    this.siteArcheologique.like=0;
    this.siteArcheologique.dislike=0;
    this.s.addSiteArcheo(this.siteArcheologique).subscribe(
      ()=>this.router.navigate(['sitearcheologique'] )
    );
    alert("site ajouté")
  }
  deleteSite(id:number){
    this.s.removeSiteArcheo(id).subscribe(
      ()=>this.router.navigate(['sitearcheologique'])
      );
    alert("site supprimé")
  }
  updateSite(id:number,s: any){
    this.s.updateSiteArcheo(s.id,s).subscribe(
      ()=> this.router.navigate(['sitearcheologique'] )
      );
    alert("site modifié")
  }
}
