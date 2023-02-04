import { NgModule,ModuleWithProviders  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatTableModule } from '@angular/material/table' ; 
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule ,
    MatTableModule ,
    MatDialogModule,
    NgMultiSelectDropDownModule.forRoot(),
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    // MatTableDataSource,


  ],
  exports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule ,
    MatTableModule ,
    MatDialogModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    // MatTableDataSource,
    NgMultiSelectDropDownModule,

  ]
})
export class MaterialModule {static forRoot(): ModuleWithProviders<MaterialModule> {
    return {
      ngModule: MaterialModule,
      providers: []
    };
  } }