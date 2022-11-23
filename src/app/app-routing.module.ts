import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/form-site-archeologique.component';
import { ListSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/list-site-archeologique/list-site-archeologique.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  //path login
  {path:'login', component:AuthentificationComponent},
  {path:'addsitearcheologique',component:FormSiteArcheologiqueComponent},
  {path:'sitearcheologique',component:ListSiteArcheologiqueComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
