import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetComponent } from './core/GestionUser/forget/forget.component';
import { LoginComponent } from './core/GestionUser/login/login.component';
import { ProfileComponent } from './core/GestionUser/profile/profile.component';
import { RegisterComponent } from './core/GestionUser/register/register.component';
import { AuthGuard } from './shared/services/auth.guard';
import { ReclamationComponent } from './core/reclamation/reclamation.component';
import { GetReclamComponent } from './core/reclamation/getReclamation/get-reclam/get-reclam.component';
/*import { BlogComponent } from './core/GestionBlog/blog/blog.component';*/
import { AllreclamationComponent } from './core/reclamation/getReclamation/allreclamation/allreclamation.component';
/*import { EspaceblogComponent } from './core/GestionBlog/espaceblog/espaceblog.component';*/

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},
  { path: 'forget', component: ForgetComponent },
  {path:'reclamation',component:ReclamationComponent},
  {path:'myreclamation',component:GetReclamComponent},
  /*{path:'blog',component:BlogComponent},*/
  {path:'allreclamation',component:AllreclamationComponent},
  /*{path:'allblog',component:EspaceblogComponent},*/



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
