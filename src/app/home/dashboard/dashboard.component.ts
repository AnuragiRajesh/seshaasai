import { Component, OnInit, OnDestroy, ViewEncapsulation, Input, HostListener, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent {// public showTable = false
  public slectedItems: any = false
  public date: any
  public metric: any
  public branch_Id: any
  public form!: FormGroup;
  public state = <any>[];
  public regions = <any>[];
  dropdownSettings: IDropdownSettings = {};

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private elementRef: ElementRef) {

  }
  ngOnInit() {
    this.initForm();

    this.regions = [
      { item_id: 1, item_text: 'North' },
      { item_id: 2, item_text: 'East' },
      { item_id: 3, item_text: 'West' },
      { item_id: 4, item_text: 'South' },

    ];
    this.metric = [
      // { item_id: 1, item_text: 'Branch ID' },
      { item_id: 2, item_text: 'Acc Opened' },
      { item_id: 3, item_text: 'Acc Closed' },
      { item_id: 4, item_text: 'Active Accounts' },
      { item_id: 5, item_text: 'Audit Completed' },
      { item_id: 6, item_text: 'Branch Recon Completed' },


    ];
    this.date = [
      { item_id: 1, item_text: 'Today' },
      { item_id: 2, item_text: 'Last 7 days' },
      { item_id: 3, item_text: 'This month' },
      { item_id: 4, item_text: 'last month' },
      { item_id: 5, item_text: 'Custom date range' }

    ];
    this.branch_Id = [
      { item_id: 1, item_text: 1000123 },
      { item_id: 2, item_text: 1000124 },
      { item_id: 3, item_text: 1000125 },
      { item_id: 4, item_text: 1000126 },
      { item_id: 5, item_text: 1000127 },
      { item_id: 6, item_text: 1001128 },
      { item_id: 7, item_text: 1000129 },
      { item_id: 8, item_text: 1000130 },
      { item_id: 9, item_text: 1000131 },
       { item_id: 10, item_text: 1000132 },

    ];

    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      // showSelectedItemsAtTop: 5,
      itemsShowLimit: 1,
    };

  }
  
  ngOndestroy() {
    debugger
    this.elementRef.nativeElement.remove();
    console.log("dhkgf")
  }
  initForm() {
    this.form = this.formBuilder.group({
      region: ['', Validators.required],
      state: ['', Validators.required],
      branch_Id: ['', Validators.required],
      metric: ['', Validators.required],
      date: ['', Validators.required],

    })
  }


  // onItemSelectOfRegion
  onItemSelectOfRegion(item: any) {
    switch (item.item_text) {
      case 'West':
        this.state = [...this.state, ...allState.West]
        // code block
        break;
      case 'East':
        this.state = [...this.state, ...allState.East]

        // code block
        break;

      case 'South':
        this.state = [...this.state, ...allState.South]
        break;
      case 'North':
        this.state = [...this.state, ...allState.North]
        break;
      default:

    }

  }
  onItemDeSelectOfRegion(item: any) {
    if (this.form.value.region.length == 0) {
      this.state = ''
      this.form.value.region = ''
      return
    }
    switch (item.item_text) {
      case 'West':
        this.state = this.state.filter((ele: any) => {
          if (!allState.West.includes(ele)) {
            return ele
          }
        })
        break;
      case 'East':
        this.state = this.state.filter((ele: any) => {
          if (!allState.East.includes(ele)) {
            return ele
          }
        })
        break;

      case 'South':
        this.state = this.state.filter((ele: any) => {
          if (!allState.South.includes(ele)) {
            return ele
          }
        })
        break;
      case 'North':
        this.state = this.state.filter((ele: any) => {
          if (!allState.North.includes(ele)) {
            return ele
          }
        })
        break;
      default:

    }





  }
  onSelectAllOfRegion(items: any) {
    this.state = [...allState.North, ...allState.East, ...allState.West, ...allState.South]
  }
  onUnSelectAllOfRegion() {

    this.form.value.region = ''
    this.state = ''


  }





  onUnSelectAllOfMetric() {
    this.form.value.metric = ''

    // this.slectedItems  = false
    // this.form.reset()
  }
  onItemSelectOfMetric(item: any) {
  }
  onItemDeSelectOfMetric(item: any) {

    if (this.form.value.metric.length == 0) {
      this.form.value.metric = ''

    }

  }
  onSelectAllOfMetric(items: any) {

  }

  onUnSelectAllOfBranch() {
    this.form.value.branch_Id = ''
    // this.form.reset()
  }
  onItemSelectOfBranch(items: any) {

  } onItemDeSelectOfBranch(items: any) {
    if (this.form.value.branch_Id.length == 0) {
      this.form.value.branch_Id = ''

    }
  }
  onSelectAllOfBranch(items: any) {

  }





  onItemSelectOfState(item: any) {
  }
  onItemDeSelectOfState(item: any) {
    if (this.form.value.state.length == 0) {
      this.form.value.state = ''

    }
  }
  onSelectAllOfState(items: any) {

  }
  onUnSelectAllOfState() {
    this.form.value.state = ''

  }


  submitbutton() {
    console.log(this.form.value,"here we go")
    if(this.form.value.metric==''||  this.form.value.metric==null || this.form.value.metric.length==0){
      delete this.form.value.metric;
      console.log(this.form.value,"finally")
    }
    if(this.form.value.state==''||  this.form.value.state==null || this.form.value.state.length==0){
      delete this.form.value.state;
      console.log(this.form.value,"finally")
    }
    if(this.form.value.date==''||  this.form.value.date==null ){
      delete this.form.value.date;
      console.log(this.form.value,"finally")
    }
    if(this.form.value.region==''||  this.form.value.region==null || this.form.value.region.length==0){
      delete this.form.value.region;
      console.log(this.form.value,"finally")
    }
    if(this.form.value.branch_Id==''||  this.form.value.branch_Id==null || this.form.value.branch_Id.length==0){
      delete this.form.value.branch_Id;
      console.log(this.form.value,"finally")
    }
    




    // this.table=true
    if ((this.form.value.region == '' && this.form.value.state == '' && this.form.value.branch_Id == '' && this.form.value.metric == '' && this.form.value.date == '') || (this.form.value.region == null && this.form.value.state == null && this.form.value.branch_Id == null && this.form.value.metric == null && this.form.value.date == null)) {
      this.slectedItems = false
      , console.log("not selecting anything")
    } else {
      
      console.log("not selecting anything for form value", this.form.value)
      this.slectedItems = this.form.value

    }
    
  }

}






const allState = {
  North: [
    { item_id: 1, item_text: 'Himachal Pradesh' },
    { item_id: 2, item_text: 'Jammu & Kashmir' },
    { item_id: 3, item_text: 'Punjab' },
    { item_id: 4, item_text: 'Uttarakhand' },
    { item_id: 5, item_text: 'Haryana' },
    { item_id: 6, item_text: 'Delhi' },
    { item_id: 7, item_text: 'Rajasthan' },
    { item_id: 8, item_text: 'Uttar Pradesh' },
    { item_id: 9, item_text: 'Madhya Pradesh' },],
  South: [
    { item_id: 10, item_text: 'Andhra Pradesh' },
    { item_id: 11, item_text: 'Karnataka' },
    { item_id: 12, item_text: 'Tamil Nadu' },
    { item_id: 13, item_text: 'Kerala' },
    { item_id: 14, item_text: 'Telangana' },],
  East: [
    { item_id: 15, item_text: 'Manipur' },
    { item_id: 16, item_text: 'Arunachal Pradesh' },
    { item_id: 17, item_text: 'Assam' },
    { item_id: 18, item_text: 'Meghalaya' },
    { item_id: 19, item_text: 'Mizoram' },
    { item_id: 20, item_text: 'Nagaland' },
    { item_id: 21, item_text: 'Sikkim' },
    { item_id: 22, item_text: 'Tripura' },],
  West: [
    { item_id: 23, item_text: 'Maharashtra' },
    { item_id: 24, item_text: 'Goa' },
    { item_id: 25, item_text: 'Gujarat' },
    { item_id: 26, item_text: 'Bihar' },]

};
