import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../app/routers';
import { SlideshowComponent } from './slideshow/slideshow.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';
// import { ProfileTutorComponent } from './profile-tutor/profile-tutor.component';
// import { ProfileEditTutorComponent } from './profile-edit-tutor/profile-edit-tutor.component';
// import { StudentHomeComponent } from './student-home/student-home.component';
// import { TutorCardComponent } from './tutor-card/tutor-card.component';
import { TutorCardListService } from './services/tutor-card-list.service'; 
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
import { AuthGaurd } from './services/auth-gaurd.service';
// import { StudentAuthGuard } from './services/student-auth-gaurd.service';
// import { ProfileEditService } from './profile-edit-tutor/profile-edit.service';
import { IntimateComponent } from './intimate/intimate.component';
import { GraphComponent } from './graph/graph.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrasComponent } from './graph/bras/bras.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubmitComponent } from './submit/submit.component';
import { ManagereditProfileComponent } from './manageredit-profile/manageredit-profile.component';
import { AppRoutingModule } from './/app-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
  
    SlideshowComponent,
    FooterComponent,
    // ProfileTutorComponent,
    // ProfileEditTutorComponent,
    // StudentHomeComponent,
    // TutorCardComponent,
    IntimateComponent,
    GraphComponent,
    BackComponent,
    FrontComponent,
  
    BrasComponent,
  
    LogoutComponent,
  
    SubmitComponent,
  
    ManagereditProfileComponent,
  
    SettingsComponent,
   
  ],
  entryComponents: [
    ManagereditProfileComponent,
    SettingsComponent,
  ],








  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    RegisterService,
    AuthService,
    TutorCardListService,
    TutorAuthGuard,
    AuthGaurd,
   
    // ProfileEditService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
