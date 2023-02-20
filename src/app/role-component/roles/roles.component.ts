import { Component, ViewChild, OnInit, AfterViewInit, ElementRef,ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { rolesTableColumns } from 'src/app/_interfaces/appInterfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Rollpoop_upInterface } from 'src/app/_interfaces/appInterfaces';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
// import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { stat } from 'fs';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/dailog-box/dialog.component';

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
export class RolesComponent implements OnInit{
  poop_up:Rollpoop_upInterface={Roll_Title:"Staff", Roll_Description:"description is yet to be updated from the backend", Roll_Access:"Eamil only access", View_Access:"All metrics",Rights_Permissions:"View only"}
  data:any
//  = [{"Roll Title":" Sales Head","Date Added":"19/112022", "Roll Access":"All Access","View":"No. of closed accounts only","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Admin","Date Added":"19/112022", "Roll Access":"E-mail only","View":"Audit only","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Technical","Date Added":"19/112022", "Roll Access":"All Access","View":"Inventory check only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Marketting Manager","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"No. of open accounts only","Rights/Permissions":"View and edit all", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"E-mail only","View":"All metrics","Rights/Permissions":"View and edit limited", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},{"Roll Title":"Staff","Date Added":"19/112022", "Roll Access":"Mobile phone no. only","View":"Branch recon only ","Rights/Permissions":"View only", "Phone Number":5678092354},]
  displayedColumns1:string[] = ['Role Title','Date Added', 'Role Access',  'View',  'Rights/Permissions',]
  displayedColumns:string[] = [...this.displayedColumns1, 'action'];
  dataSource: any
  @ViewChild('content', { static: true }) content: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild('Table') table: ElementRef;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement: any;
 
  constructor(private service: DataService,
    private router: Router,
    private modalService: NgbModal,
    ) {
    this.dataSource = new MatTableDataSource();
  }

  deleteRole(id:any){
   this.service.deleteRoleData(id).subscribe((res:any)=>{
  })
  // this.cdr.detectChanges();
  }
  openDialogOfDelete(element:any){
    const config: NgbModalOptions = {
      backdrop:false,
      keyboard: true,
      centered: true,
      size:'s,'
      
    };
    const modalRef = this.modalService.open(DialogComponent,config);
    modalRef.componentInstance.data =element
    modalRef.result.then((result) => {
      result?this.service.deleteRoleData(element.Id).subscribe((res:any)=>{
        this.getDataFromGetRoleApi()
        console.log(res,"response from delete role api")
      }):console.log(result)
    }).catch((error) => {
      console.log(error);
    });
  }
  openDialogOfRead(content:any,element:any): void {
    this.poop_up.Roll_Title=element['Role Title']
    this.poop_up.Roll_Description=element['Description']
    this.poop_up.Roll_Access=element['Role Access']
    this.poop_up.View_Access=element['View']
    this.poop_up.Rights_Permissions=element['Rights/Permissions']
    console.log(element,"jjjjjjjjjj")
    const config: NgbModalOptions = {
      backdrop:false,
      keyboard: true,
      centered: true,
      size:'sl'
      
    };
    const modalRef = this.modalService.open(content,config);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  editRow(element:any){
    // debugger
    console.log(element)
    this.router.navigate(['/home/rolesComponent/editRole'], {
      queryParams: element
    });}
  // saveRow(element:any){
  //   console.log("onSave of Row",element)
  // }
  // cancelEdit(element:any)
  // {
  //   console.log("onCancel of Row",element)
  // }

  //  exportAsExcelFile(json: any, excelFileName: string): void {
  //   debugger
  //   const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json.filteredData);
  //   const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //   XLSX.writeFile(workbook, excelFileName + '.xlsx');
  // }





  ExportTOExcel()
  {

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'TablesSizee.xlsx');
    
  }
  ngOnInit(): void {
    this.getDataFromGetRoleApi()

  }
 


getDataFromGetRoleApi(){
  this.service.getRoleData().subscribe((res:any)=>{
    console.log(res,"hareesh")
    res.forEach((obj: any) => renameKey(obj, 'Name', 'Role Title'));
    res.forEach((obj: any) => renameKey(obj, 'Created_Date', 'Date Added'));
    res.forEach((obj: any) => renameKey(obj, 'RoleAccess', 'Role Access'));
    res.forEach((obj: any) => renameKey(obj, 'Rights', 'Rights/Permissions'));
    console.log(res)
this.dataSource = new MatTableDataSource<rolesTableColumns>(res);
this.implementationOfPaginatorAndMatsort()
  })
}
implementationOfPaginatorAndMatsort(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}



}

function renameKey(obj: any, oldKey: any, newKey: any) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}