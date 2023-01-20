import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { userRolesTableColumns } from 'src/app/_interfaces/appInterfaces';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit, AfterViewInit {
  data:userRolesTableColumns[] = [{'User Name':"Amol Limje","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"HR","User ID":6789345},{'User Name':"Ankit Sharma","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':" Shagun Borgaonkar","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"CEO","User ID":6789345},{'User Name':" Garima Jain","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Head","User ID":6789345},{'User Name':"Aviral Juneja","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Admin","User ID":6789345},{'User Name':"Shagun Borgaonkar","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Anirudh Gupta","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},{'User Name':"Harees","Date of roll assigned":"19/112022", "Location":"East","Branch ID":1000123,"Roll assigned":"Sales Staff","User ID":6789345},]
  displayedColumns1 = ['User Name','User ID', 'Branch ID', 'Location',    'Roll assigned','Date of roll assigned',]
  displayedColumns = [...this.displayedColumns1, 'action'];
  dataSource: any
  @ViewChild('MatPaginator', { static: false }) paginator!: MatPaginator;
  @ViewChild('sort', { static: false }) sort!: MatSort;

  expandedElement: any;
  constructor(private service: DataService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data)
  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
