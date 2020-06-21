import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PublishComponent } from './publish/publish.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LatestbookpublishedComponent } from './latestbookpublished/latestbookpublished.component';
import { PublishbookComponent } from './publishbook/publishbook.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:WebsiteComponent,children:[
<<<<<<< HEAD
    {path:'',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'publish',component:PublishComponent}
  ]},

 {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]  ,children:[

  {path:'',component:LatestbookpublishedComponent},
  {path:'publishbook',component:PublishbookComponent},
  {path:'logout',component:LogoutComponent}

 ]} 

=======
      {path:'',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'publish',component:PublishComponent}
  ]}
>>>>>>> da1fc2324791b25a22ae7d541d1e45498582ce26
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
