import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './home/dashboard/table/table.component';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './home/dashboard/dashboard.component';
import { UsersComponent } from './home/users/users.component';
import { UserRolesComponent } from './home/user-roles/user-roles.component';
import { RolesComponent } from './home/roles/roles.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
  children: [     // Children routes are inside the parent route
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'userRoles',
    component: UserRolesComponent,
  },
 
  


]
},
   { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
