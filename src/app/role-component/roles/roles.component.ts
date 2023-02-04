import { Component, ViewChild, OnInit, AfterViewInit, ElementRef,ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { rolesTableColumns } from 'src/app/_interfaces/appInterfaces';
import { DialogComponent } from './dailog-box/dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

// import { MatDialog } from '@angular/material/dialog';
// import { DialogComponent } from './dailog-box/dialog.component';
import * as XLSX from 'xlsx';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { stat } from 'fs';

@Component({
  selector: 'app-roles',
  // standalone: true,
  templateUrl: './roles.component.html',
  encapsulation:ViewEncapsulation.None,
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
  @ViewChild('content', { static: true }) content: ElementRef;
  @ViewChild('MatPaginator', { static: false }) paginator: MatPaginator;
   @ViewChild('Table') table: ElementRef;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement: any;
 
  constructor(private service: DataService,
    private modalService: NgbModal
    ) {
    this.dataSource = new MatTableDataSource();
  }
  openDialog(content:any): void {
    const config: NgbModalOptions = {
      backdrop: false,
      keyboard: true,
      centered: true,
      
    };
    const modalRef = this.modalService.open(content,config);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
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
    this.content.nativeElement.prependTo(document.body);
  }
}