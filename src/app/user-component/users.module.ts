import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../MaterialModule';
import { UsersComponent } from './users/users.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, MaterialModule.forRoot(),UserRoutingModule]
})
export class UserModule { }