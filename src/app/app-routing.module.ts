import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/register/register.component';
import { AddjobDetailsComponent } from './components/addjob-details/addjob-details.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes: Routes = [
  { path: '', component:HomeComponent, pathMatch:'full'},
    { path: '\home', component:HomeComponent },
    {path: '\login', component:LoginComponent},
    {path: '\heading', component:UserComponent},
    {path: '\addjob', component:AddjobDetailsComponent},
    {path: '\register', component:RegisterComponent},
    {path: '\contactus', component:ContactusComponent},
    {path: '\list-user', component:UserListComponent}
 // { path: 'skills', loadChildren: () => import('./components/skills/skills/skills.module').then(m => m.SkillsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
