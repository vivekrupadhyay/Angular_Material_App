import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './controls/header/header.component';
import { SidenavListComponent } from './controls/sidenav-list/sidenav-list.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UserComponent } from './components/user/user.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FooterComponent } from './controls/footer/footer.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddjobDetailsComponent } from './components/addjob-details/addjob-details.component';
import { UserService } from './services/user.service';
import {UserListComponent} from './components/user-list/user-list.component'
//import { UserDatasourceService } from './services/userDatasource.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    HeaderComponent,
    SidenavListComponent,
    MainLayoutComponent,
    UserComponent,
    ContactusComponent,
    UserProfileComponent,
    FooterComponent,
    EducationComponent,
    SkillComponent,
    SummaryComponent,
    LoginComponent,
    RegisterComponent,
    AddjobDetailsComponent,
    UserListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UserService],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
