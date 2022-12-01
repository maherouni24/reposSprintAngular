import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { FooterComponent } from './shared/footer/footer.component';

import { GestionProprieteComponent } from './core/gestion-propriete/gestion-propriete.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MapsComponent } from './maps/maps.component';

import { HttpClientModule } from '@angular/common/http';
import { DefilePhotosComponent } from './shared/defile-photos/defile-photos.component';
import { FormReservationComponent } from './form-reservation/form-reservation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { MeteoComponent } from './meteo/meteo.component';
import { CalendrierComponent } from './shared/calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { ReclamationComponent } from './core/reclamation/reclamation.component';
import { AllreclamationComponent } from './core/reclamation/getReclamation/allreclamation/allreclamation.component';
import { GetReclamComponent } from './core/reclamation/getReclamation/get-reclam/get-reclam.component';
import { ForgetComponent } from './core/GestionUser/forget/forget.component';
import { LoginComponent } from './core/GestionUser/login/login.component';
import { ProfileComponent } from './core/GestionUser/profile/profile.component';
import { RegisterComponent } from './core/GestionUser/register/register.component';

 // a plugin!
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    ErrorsComponent,
    FooterComponent,
    
    GestionProprieteComponent,
    AuthentificationComponent,
    MapsComponent,
   
    DefilePhotosComponent,
    FormReservationComponent,
    SidebarComponent,
  
    MeteoComponent,
    CalendrierComponent,
    ReclamationComponent,
    AllreclamationComponent,
    GetReclamComponent,
    ForgetComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
