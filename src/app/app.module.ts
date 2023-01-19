import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideWarComponent } from './side-war/side-war.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SelectionComponent } from './selection/selection.component';
import { SummaryComponent } from './Summary/summary.component';
import { TableComponent } from './table/table.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS,} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatTableModule } from '@angular/material/table' ; 
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UsersComponent } from './home/users/users.component';
import { RolesComponent } from './home/roles/roles.component';
import { UserRolesComponent } from './home/user-roles/user-roles.component';
@NgModule({
  declarations: [
    AppComponent,
    SideWarComponent,
    NavBarComponent,
    SelectionComponent,
    SummaryComponent,
    LoginComponent,
    TableComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    RolesComponent,
    UserRolesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule ,
    MatTableModule ,
    CdkTableModule,
    MatPaginatorModule,
    NgMultiSelectDropDownModule.forRoot()
    
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
