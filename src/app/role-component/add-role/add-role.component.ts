import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from 'src/app/customServices/data.service';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsForView:IDropdownSettings = {};
  public roll_access: any
  public view: any
  public rights: any
  public selectedItems:string[]

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: DataService,
    private router: Router,) {

  }
  //  = [
  //   { item_id: 1, item_text: 'Mumbai' },
  //   { item_id: 2, item_text: 'Bangalore' },
  //   { item_id: 3, item_text: 'Pune' }
  // ];
  ngOnInit(): void {
    this.initForm()
    this.roll_access = [
   'All Access' ,
     "Mobile number access" 
   , "Email access" 

    ];
    this.view = [
      "Audit",
      , "Branch recon"
      , 'Inventory check'
      , "No. of open account"
      , "No. of closed account"

    ];
    this.rights = [
     'View' ,
 "View and edit all",
     "View and edit limited" 

    ];


    // this.selectedItems = [
    //   'All Access' ,
    //   "Mobile number access" ,
    //   "E-mail only access" 
    // ];


    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      // showSelectedItemsAtTop: 5,
      limitSelection:1,
      itemsShowLimit: 1,
    };
    this.dropdownSettingsForView = {
      idField: 'item_id',
      textField: 'item_text',
      // showSelectedItemsAtTop: 5,
   
      itemsShowLimit: 1,
    };

  }
  initForm() {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      RoleAccess: ['', Validators.required],
      View: ['', Validators.required],
      Rights: ['', Validators.required],
      Description: ['', Validators.required],

    })

  }

  submitbutton() {
    console.log(this.form.value, "haresshvvvcvvv")
    this.service.postRoleData(this.form.value).subscribe((res:any)=>{
        console.log(res,"response from the role post api")
    })
  }
  // onUnSelectAllOfBranch() {
  //   this.form.value.branch_Id = ''
  //   // this.form.reset()
  // }
  // onItemSelectOfBranch(items: any) {

  // } onItemDeSelectOfBranch(items: any) {
  //   if (this.form.value.branch_Id.length == 0) {
  //     this.form.value.branch_Id = ''

  //   }
  // }
  // onSelectAllOfBranch(items: any) {

  // }







}
