import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GestionUserComponent } from './core/gestion-user/gestion-user.component';
import { GestionProprieteComponent } from './core/gestion-propriete/gestion-propriete.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {HttpClientModule} from '@angular/common/http';
import { ListSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/list-site-archeologique/list-site-archeologique.component';
import { HeaderComponent } from './shared/header/header.component';
import { StatistiqueComponent } from './core/statistiques/statistique/statistique.component';
import { FormSiteArcheologiqueComponent } from './core/gestionSite/form-site-archeologique/form-site-archeologique.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    ErrorsComponent,
    FooterComponent,
    GestionUserComponent,
    GestionProprieteComponent,
    AuthentificationComponent,
    ListSiteArcheologiqueComponent,
    HeaderComponent,
    StatistiqueComponent,
    FormSiteArcheologiqueComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
