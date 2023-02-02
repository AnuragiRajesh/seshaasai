import { Component, ViewChild, OnInit, AfterViewInit,OnChanges, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { rolesTableColumns } from 'src/app/_interfaces/appInterfaces';
// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from './dailog-box/dialog.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
}) 
export class RolesComponent implements OnInit, AfterViewInit{
  poop_up:{}={Roll_Title:"Staff", Roll_Description:"Everyone below the assiatant manager position comes under Staff.", Roll_Access:"Eamil only access", View_Access:"All metrics","Rights/Permissions":"View only"}
 data:rolesTableColumns[]= [{"Roll Title":" Sales Head","Date Added":"19/112022", "Roll Access":"All Access","View":"No. of closed accounts only","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Admin","Date Added":"19/112022", "Roll Access":"E-mail only","View":"Audit only","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Technical","Date Added":"19/112022", "Roll Access":"All Access","View":"Inventory check only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Marketting Manager","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"No. of open accounts only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"E-mail only","View":"All metrics","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},]
  displayedColumns1:string[] = ['Roll Title','Date Added', 'Roll Access',  'View',  'Rights/Permissions','Phone Number',]
  displayedColumns:string[] = [...this.displayedColumns1, 'action'];
  dataSource: any
  @ViewChild('MatPaginator', { static: false }) paginator: MatPaginator;
   @ViewChild('Table') table: ElementRef;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement: any;
  constructor(private service: DataService
    // ,public dialog: MatDialog
    ) {
    this.dataSource = new MatTableDataSource();
  }
  openDialog(): void {
    // let dialogRef = this.dialog.open(DialogComponent, {
    //   width: '250px',
    //   data: this.poop_up
    // });
  
    // dialogRef.afterClosed().subscribe(result => {
    //   this.poop_up = result;
    // });
  }
  ExportTOExcel()
  {

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'TablesSizee.xlsx');
    
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
  }
 
  // ngOnChanges(){
  //   this.dataSource = new MatTableDataSource(this.data);
  //   this.dataSource.sort = this.sort;
  // }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}