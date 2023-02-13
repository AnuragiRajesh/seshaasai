import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/customServices/data.service';
import { userRolesTableColumns } from 'src/app/_interfaces/appInterfaces';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  data:any
  displayedColumns1 = ['User Name','User ID', 'Branch ID', 'Location',    'Roll assigned','Date of roll assigned',]
  displayedColumns = [...this.displayedColumns1, 'action'];
  dataSource:any
  @ViewChild('Table') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  expandedElement: any;
  constructor(private service: DataService,private router: Router,) {
  }
  ExportTOExcel()
  {

    const ws: XLSX.WorkSheet=XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    /* save to file */
    XLSX.writeFile(wb, 'TablesSizee.xlsx');
    
  }
  editRow(element:any){
    // debugger
    console.log(element)
    this.router.navigate(['/home/userRolesComponent/editUsereRole'], {
      queryParams: element
    });}

  ngOnInit(): void {
    this.service.getUserRoleData().subscribe((res:any)=>{
      res.forEach((obj: any) => renameKey(obj, 'Roll_Assigned', 'Roll assigned'));
      res.forEach((obj: any) => renameKey(obj, 'BranchID', 'Branch ID'));
      res.forEach((obj: any) => renameKey(obj, 'UserID', 'User ID'));
      res.forEach((obj: any) => renameKey(obj, 'Created_Date', 'Date of roll assigned'));
      res.forEach((obj: any) => renameKey(obj, 'UserName', 'User Name'));
      // res.forEach((obj: any) => renameKey(obj, 'Serial_No', 'Serial No'));
      console.log(res, "service is beeing called?")
      this.dataSource = new MatTableDataSource<userRolesTableColumns>(res);
      this.dataSource.paginator = this.paginator;
    })
  }
 
  // ngAfterViewInit(): void {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }
}
function renameKey(obj: any, oldKey: any, newKey: any) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}