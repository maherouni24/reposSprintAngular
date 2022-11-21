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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
