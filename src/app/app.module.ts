import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/GestionUser/login/login.component';
import { RegisterComponent } from './core/GestionUser/register/register.component';
import { ProfileComponent } from './core/GestionUser/profile/profile.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ForgetComponent } from './core/GestionUser/forget/forget.component';
import { BlogComponent } from './core/GestionBlog/blog/blog.component';
import { EspaceblogComponent } from './core/GestionBlog/espaceblog/espaceblog.component';
import { CommentaireComponent } from './core/commentaire/commentaire/commentaire.component';

import { UpdateBlogComponent } from './core/GestionBlog/update-blog/update-blog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavComponent,
    FooterComponent,
    ForgetComponent,
    BlogComponent,
    EspaceblogComponent,
    CommentaireComponent,
    UpdateBlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
