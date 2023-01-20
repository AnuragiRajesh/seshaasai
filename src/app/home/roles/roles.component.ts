import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { rolesTableColumns } from 'src/app/_interfaces/appInterfaces';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
}) 
export class RolesComponent implements OnInit, AfterViewInit {
 data:rolesTableColumns[]= [{"Roll Title":" Sales Head","Date Added":"19/112022", "Roll Access":"All Access","View":"No. of closed accounts only","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Admin","Date Added":"19/112022", "Roll Access":"E-mail only","View":"Audit only","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Technical","Date Added":"19/112022", "Roll Access":"All Access","View":"Inventory check only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Marketting Manager","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"No. of open accounts only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"E-mail only","View":"All metrics","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},]
  displayedColumns1:string[] = ['Roll Title','Date Added', 'Roll Access',  'View',  'Rights/Permissions','Phone Number',]
  displayedColumns:string[] = [...this.displayedColumns1, 'action'];
  dataSource: any
  @ViewChild('MatPaginator', { static: false }) paginator!: MatPaginator;
  @ViewChild('sort', { static: false }) sort!: MatSort;

  expandedElement: any;
  constructor(private service: DataService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
 
  
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}