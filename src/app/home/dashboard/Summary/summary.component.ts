import { Component, OnInit, HostBinding, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource,  } from '@angular/material/table';
import {MatPaginator
} from  '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { DataService } from 'src/app/customServices/data.service';




@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SummaryComponent  implements OnInit {
  @Output() toShowTableComponent = new EventEmitter<boolean>();
  public No_of_Accounts_Closed :number = 0
 public No_of_Accounts_Opened:number = 0
 public Audits_completed :number = 0
 public Branch_recon_completed :number = 0
 public Currrent_Inventory :number = 0

public data:any




  displayedColumns = ['position', 'name', 'weight', 'action'];
  dataSource: MatTableDataSource<Element>;

  @ViewChild('MatPaginator', { static: false }) paginator!: MatPaginator;
  @ViewChild('sort', { static: false }) sort!: MatSort;
  
  expandedElement: any;
  
  constructor(private service: DataService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() { 
    type MyStructure = Object[] | Object;
    this.service.getDashboardData().subscribe(res=>{
      this.data= res
      this.data.map((ele:any)=>{
        // console.log(ele.Acc_Closed)
this.No_of_Accounts_Closed +=ele.Acc_Closed
 this.No_of_Accounts_Opened +=ele.Acc_Opened
 this.Audits_completed +=ele.Audit_Completed
 this.Branch_recon_completed +=ele.Branch_Recon_Completed
 this.Currrent_Inventory +=ele.Active_Accounts



})
    })    
    
    
  }





  navigateToTable(){
    this.toShowTableComponent.emit(true);
  }
}

