import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TableComponent } from './home/dashboard/table/table.component';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './home/dashboard/dashboard.component';
import { UsersComponent } from './user-component/users/users.component';
import { UserRolesComponent } from './home/user-roles/user-roles.component';
import { RolesComponent } from './home/roles/roles.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './user-component/add-user/add-user.component';
import { UserComponentComponent } from './user-component/user-component.component';


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
    path: 'userComponent',
    component: UserComponentComponent,
    children:[
      {
        path: '',
        redirectTo: 'addUser',
        pathMatch: 'full'
      },
      {path:"user",component:UsersComponent},
      {path:"addUser",component:AddUserComponent},
    ]
    
  
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
