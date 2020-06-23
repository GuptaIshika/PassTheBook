import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PublishComponent } from './publish/publish.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { PublishbookComponent } from './publishbook/publishbook.component';
import { LatestbookpublishedComponent } from './latestbookpublished/latestbookpublished.component';
import { HttpClientModule } from '@angular/common/http';
import { PrefixPipe } from './prefix.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    HeaderComponent,
    LogoComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PublishComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    DashboardComponent,
    DashboardheaderComponent,
    PublishbookComponent,
    
    LatestbookpublishedComponent,
    PrefixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
