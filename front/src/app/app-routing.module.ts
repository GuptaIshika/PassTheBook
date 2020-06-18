import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PublishComponent } from './publish/publish.component';


const routes: Routes = [
  {path:'',component:WebsiteComponent,children:[
      {path:'',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'publish',component:PublishComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
