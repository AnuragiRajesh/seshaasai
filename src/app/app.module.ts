import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideWarComponent } from './home/dashboard/side-war/side-war.component';
import { NavBarComponent } from './home/dashboard/nav-bar/nav-bar.component';
import { SummaryComponent } from './home/dashboard/Summary/summary.component';
import { TableComponent } from './home/dashboard/table/table.component';
import { MaterialModule } from './MaterialModule';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
// import { UsersComponent } from './user-component/users/users.component';
import { RolesComponent } from './home/roles/roles.component';
import { UserRolesComponent } from './home/user-roles/user-roles.component';
import { AddUserComponent } from './user-component/add-user/add-user.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserModule } from './user-component/users.module';

@NgModule({
  declarations: [
    AppComponent,
    SideWarComponent,
    NavBarComponent,
    SummaryComponent,
    LoginComponent,
    TableComponent,
    HomeComponent,
    DashboardComponent,
    // UsersComponent,
    RolesComponent,
    UserRolesComponent,
    AddUserComponent,
    UserComponentComponent,
    
  ],
  imports: [

    MaterialModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule

    
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
