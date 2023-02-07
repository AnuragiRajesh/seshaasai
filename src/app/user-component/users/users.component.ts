import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { usersTableColumns } from 'src/app/_interfaces/appInterfaces';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit ,AfterViewInit{
  data:any
  // = [{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Kizziz","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Manoj","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Kajal","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Pankaj","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Raju","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Vinod","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'}]
  displayedColumns1:string[] = ['User','Date Added', 'Region',  'Branch ID',  'Email ID','Phone Number',]
  displayedColumns:string[] = [...this.displayedColumns1, 'action'];
  dataSource:any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('Table') table: ElementRef;
  VOForm: FormGroup;
  pageSizes = [3, 5, 7];
  expandedElement: any;
  constructor(private service: DataService,private router: Router
) {
    
  }
  clicked(){
    this.router.navigate(['/addUser']);
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
    this.service.getUserData().subscribe((res:any)=>{
      res.forEach((obj: any) => renameKey(obj, 'PhoneNumber', 'Phone Number'));
      res.forEach((obj: any) => renameKey(obj, 'Created_Date', 'Date Added'));
      res.forEach((obj: any) => renameKey(obj, 'BranchID', 'Branch ID'));
      res.forEach((obj: any) => renameKey(obj, 'Email', 'Email ID'));
      res.forEach((obj: any) => renameKey(obj, 'UserName', 'User'));
      console.log(res,"kkkkk")
      this.dataSource = new MatTableDataSource<usersTableColumns>(res);
      this.dataSource.paginator = this.paginator;

    })
  }
  navigateToAdduser(){
    // this.Route.navigate(['user/addUser'])
  }
 
  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginatorPageSize;
  }


}
function renameKey(obj: any, oldKey: any, newKey: any) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}