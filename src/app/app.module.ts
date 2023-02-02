import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideWarComponent } from './home/dashboard/side-war/side-war.component';
import { NavBarComponent } from './home/dashboard/nav-bar/nav-bar.component';
import { SummaryComponent } from './home/dashboard/Summary/summary.component';
import { TableComponent } from './home/dashboard/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatTableModule } from '@angular/material/table' ; 
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatInputModule } from '@angular/material/input';




import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { UsersComponent } from './user-component/users/users.component';
import { RolesComponent } from './home/roles/roles.component';
import { UserRolesComponent } from './home/user-roles/user-roles.component';
import { AddUserComponent } from './user-component/add-user/add-user.component';
import { UserComponentComponent } from './user-component/user-component.component';
// import { DialogModule } from './home/roles/dailog-box/dialog.module';
// import { MatTableExporterModule } from '@danievds/mat-table-exporter';

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
    UsersComponent,
    RolesComponent,
    UserRolesComponent,
    AddUserComponent,
    UserComponentComponent,
    
  ],
  imports: [
    // DialogModule,
    // MatTableExporterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
 //MatSidenavModule,
  //  MatButtonModule,
    MatIconModule ,
    MatTableModule ,
    MatDialogModule,
   // MatListModule,
  //  MatToolbarModule,
    MatSortModule,
   // MatStepperModule,
   // MatInputModule,
    CdkTableModule,
    MatPaginatorModule,
    NgMultiSelectDropDownModule.forRoot()
    
    

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
