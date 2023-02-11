import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from 'src/app/customServices/data.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  // selectedRoleAccess = ["E-mail only access" ]
  dropdownSettings: IDropdownSettings = {};
  dropdownSettingsForView:IDropdownSettings = {};
  public roll_access: any
  public view: any
  public rights: any
  // public selectedRoleAccess:string[] =[]
  // public selectedViewAccess:string[]=[]
  // public selectedRightPermission:string[]=[]

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: DataService,
) {

  }
  //  = [
  //   { item_id: 1, item_text: 'Mumbai' },
  //   { item_id: 2, item_text: 'Bangalore' },
  //   { item_id: 3, item_text: 'Pune' }
  // ];
  ngOnInit(): void {
    
  
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



    this.route.queryParams.subscribe(params => {
      console.log(params,"hhh") 
      this.form = this.formBuilder.group({
        Id: [params['Id'], Validators.required],
        Name: [params['Role Title'], Validators.required],
        RoleAccess: [ params['Role Access'], Validators.required],
        View: [params['View'], Validators.required],
        Rights: [params['Rights/Permissions'], Validators.required],
        Description: [params['Description'], Validators.required],
  
      })

// this.selectedRoleAccess.push(params['Role Access'])


    });






  }


  submitbutton() {
    console.log(this.form.value, "haresshvvvcvvv")
    this.service.updateRoleData(this.form.value.Id,this.form.value).subscribe((res:any)=>{
        console.log(res,"response from the role post api")
    })
  }



}
