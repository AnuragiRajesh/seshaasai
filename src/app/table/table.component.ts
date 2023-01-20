import { Component, OnInit, HostBinding, AfterViewInit, ViewChild, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource, } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { DataService } from '../customServices/data.service';
import { dashboardTableColumns} from '../_interfaces/appInterfaces';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})



export class TableComponent implements OnInit, AfterViewInit {

  pageSizes = [3, 5, 7];
  public data: any
  @Input() slectedItemsFromSlectionComponent: any = <any>[]
  predefineFields:Array<string>=['Date', 'Region', 'State', 'Branch ID',]
  showComponent = false
  displayedColumns1 = ['Date', 'Region', 'State', 'Branch ID', 'Acc Opened', 'Acc Closed', 'Active Accounts', 'Audit Completed', 'Branch Recon Completed',]
  displayedColumns = [...this.displayedColumns1, 'action'];
  dataSource: MatTableDataSource<dashboardTableColumns>;
  @ViewChild('MatPaginator', { static: false }) paginator: MatPaginator;
  @ViewChild('sort', { static: false }) sort: MatSort;

  expandedElement: any;

  constructor(private service: DataService) {
    this.dataSource = new MatTableDataSource();
  }
  isEMptyOrNull(text: string) {
    return text == null || text == ''
  }
  ngOnInit() {



    this.service.availableData().subscribe((res: any) => {

      res.forEach((obj: any) => renameKey(obj, 'Branch_Recon_Completed', 'Branch Recon Completed'));
      res.forEach((obj: any) => renameKey(obj, 'Audit_Completed', 'Audit Completed'));
      res.forEach((obj: any) => renameKey(obj, 'Active_Accounts', 'Active Accounts'));
      res.forEach((obj: any) => renameKey(obj, 'Branch_ID', 'Branch ID'));
      res.forEach((obj: any) => renameKey(obj, 'Acc_Opened', 'Acc Opened'));
      res.forEach((obj: any) => renameKey(obj, 'Acc_Closed', 'Acc Closed'));
      res.forEach((obj: any) => renameKey(obj, 'Serial_No', 'Serial No'));
      console.log(res, "service is beeing called?")
      this.data = res
      this.dataSource.data = this.data
    })


    this.showComponent ? console.log("true") : console.log("false")
    console.log(!this.showComponent, "testing")
  }
  ngOnChanges(changes: any) {
    console.log(this.slectedItemsFromSlectionComponent, "lllllllllllllll", this.data)





    if (this.slectedItemsFromSlectionComponent.metric! || this.slectedItemsFromSlectionComponent.metric == null) {
      this.displayedColumns1 = ['Date', 'Region', 'State', 'Branch ID', 'Acc Opened', 'Acc Closed', 'Active Accounts', 'Audit Completed', 'Branch Recon Completed',]
      this.displayedColumns = [...this.displayedColumns1, 'action'];
    }
    console.log("THis for chnage,", this.slectedItemsFromSlectionComponent)
    if (this.slectedItemsFromSlectionComponent !== false) {
      this.dataSource.data = this.data.filter((ele: any) => {

        //////////Filter for all the fields //////////////////////////////////////////////////
        if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) &&
            this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }

        }




        //////////////For slecting only singal field //////////////////////////////////






        //////////////Region //////////////////////////////////
        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region)) {
            return ele
          }
        }



        ////////////// State  //////////////////////////////////
        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State)) {
            return ele
          }
        }


        ////////////// Branch Id  //////////////////////////////////
        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele['Branch ID'])) {
            return ele
          }
        }


        ////////////// Metric//////////////////////////////////
        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {

          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          return ele
        }

        ////////////// Date//////////////////////////////////

        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }







        //////////////////////////////////////////////////////////////////////////Selecting 2 times region ////////////////////////////////////

        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID'])) {
            return ele
          }
        }






        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region)) {
            return ele
          }
        }

        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region)) {
            return ele
          }
        }


        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }

        //////////////////////////////////////////////////////////////////////////Selecting 3 times for region ////////////////////////////////////

        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State)) {
            return ele
          }
        }




        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID'])) {
            return ele
          }
        }

        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }




        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          // 
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State)) {
            return ele
          }
        }

        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          // 

          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }


        /////////////////////////////////////////////selecting 4 items with Region /////////////////////


        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State)) {
            return ele
          }
        }


        else if (this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }



        else if (this.slectedItemsFromSlectionComponent.region && this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {

          if (this.slectedItemsFromSlectionComponent.region.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele.Region) &&
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) &&
            this.slectedItemsFromSlectionComponent.state.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele.State) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }





        ////////selecting fields for Branch Id //////////////////////////////

        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && !this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
            return ele2.item_text
          }).includes(ele['Branch ID'])) {
            return ele
          }
        }


        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && !this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {

          if (
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }


        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (
            this.slectedItemsFromSlectionComponent.branch_Id.map((ele2: any) => {
              return ele2.item_text
            }).includes(ele['Branch ID']) && this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }

        else if (!this.slectedItemsFromSlectionComponent.region && !this.slectedItemsFromSlectionComponent.state && !this.slectedItemsFromSlectionComponent.branch_Id && this.slectedItemsFromSlectionComponent.metric && this.slectedItemsFromSlectionComponent.date) {
          this.displayedColumns1 = [...this.predefineFields, ...this.slectedItemsFromSlectionComponent.metric.map((ee: any) => {
            return ee["item_text"]
          })]
          this.displayedColumns = [...this.displayedColumns1, 'action'];
          if (this.slectedItemsFromSlectionComponent.date == ele['Date']) {
            return ele
          }
        }

      })




    } else {

      this.dataSource.data = this.data
    }

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



}



function renameKey(obj: any, oldKey: any, newKey: any) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

