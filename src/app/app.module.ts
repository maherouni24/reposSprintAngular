import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GestionUserComponent } from './core/gestion-user/gestion-user.component';
import { GestionProprieteComponent } from './core/gestion-propriete/gestion-propriete.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MapsComponent } from './maps/maps.component';

import { HttpClientModule } from '@angular/common/http';
import { DefilePhotosComponent } from './shared/defile-photos/defile-photos.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AddReclamComponent } from './core/add-reclam/add-reclam.component';


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
    MapsComponent,
   
    DefilePhotosComponent,
    FormReservationComponent,
    SidebarComponent,
    AddReclamComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
