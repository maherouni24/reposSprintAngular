import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostComponent } from './core/gestionPost/formPost/post/post.component';
import { ListPostComponent } from './core/gestionPost/ListPost/list-post/list-post.component';
import { FormSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/form-site-archeologique.component';
import { ListSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/list-site-archeologique/list-site-archeologique.component';
import { FormVisiteComponent } from './core/gestionVisite/formVisite/form-visite/form-visite.component';
import { ListVisiteComponent } from './core/gestionVisite/ListVisite/list-visite/list-visite.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  //path login
  {path:'login', component:AuthentificationComponent},
  {path:'addsitearcheologique',component:FormSiteArcheologiqueComponent},
  {path:'sitearcheologique',component:ListSiteArcheologiqueComponent},
  {path:'addvisite',component:FormVisiteComponent},
  {path:'visite',component:ListVisiteComponent},
  {path:'posts',component:ListPostComponent},
  {path:'addpost',component:PostComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
