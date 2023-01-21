import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/customServices/data.service';
import { usersTableColumns } from 'src/app/_interfaces/appInterfaces';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit ,AfterViewInit{
  data:usersTableColumns[]= [{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Kizziz","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Manoj","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Kajal","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Pankaj","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Raju","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Vinod","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{"Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'}]
  displayedColumns1:string[] = ['Name','Date Added', 'Region',  'Branch ID',  'Email ID','Phone Number',]
  displayedColumns:string[] = [...this.displayedColumns1, 'action'];
  dataSource= new MatTableDataSource<usersTableColumns>
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('Table') table: ElementRef;
  pageSizes = [3, 5, 7];
  expandedElement: any;
  constructor(private service: DataService) {
    // this.dataSource = new MatTableDataSource();
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
    this.dataSource= new MatTableDataSource(this.data)
  }
 
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginatorPageSize;
  }


}
