import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {path:"user",component:UsersComponent},
      {path:"addUser",component:AddUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }