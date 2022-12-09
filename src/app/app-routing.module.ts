import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './core/GestionUser/forget/forget.component';
import { LoginComponent } from './core/GestionUser/login/login.component';
import { ProfileComponent } from './core/GestionUser/profile/profile.component';
import { RegisterComponent } from './core/GestionUser/register/register.component';
import { AuthGuard } from './shared/services/auth.guard';
import { BlogComponent } from './core/GestionBlog/blog/blog.component';

import { EspaceblogComponent } from './core/GestionBlog/espaceblog/espaceblog.component';;
import { UpdateBlogComponent } from './core/GestionBlog/update-blog/update-blog.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  { path: 'forget', component: ForgetComponent },
  {path:'blog',component:BlogComponent},
  {path:'allblog',component:EspaceblogComponent},
  {path:'updateblog/:id',component:UpdateBlogComponent},
  {path:'delete/:id',component:EspaceblogComponent},




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
