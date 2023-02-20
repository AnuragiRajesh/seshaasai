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

  public reactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: DataService,
) {

  }

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
      itemsShowLimit:1,
      // [enableSearch]="true",
      allowSearchFilter: true,
    };



    this.route.queryParams.subscribe(params => {
      console.log(params,"hhh", params['Role Access']) 
      this.reactiveForm = this.formBuilder.group({
        Id: [params['Id'], Validators.required],
        Name: [params['Role Title'], Validators.required],
        RoleAccess:  [params['Role Access'], Validators.required],
        View: [params['View'], Validators.required],
        Rights: [params['Rights/Permissions'], Validators.required],
        Description: [params['Description'], Validators.required],
  
      })



    });






  }

  get Name() {
    return this.reactiveForm.get('Name')!;
  }

  get View() {
    return this.reactiveForm.get('View')!;
  }

  get RoleAccess() {
    return this.reactiveForm.get('RoleAccess')!;
  }
  get Rights() {
    return this.reactiveForm.get('Rights')!;
  }
  get Description() {
    return this.reactiveForm.get('Description')!;
  }
  submitbutton() {
    console.log(this.reactiveForm.value, "haresshvvvcvvv")
    for (const controlName of Object.keys(this.reactiveForm.controls)) {
      const control = this.reactiveForm.controls[controlName];
      control.markAsTouched();
    }
  
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value)
     
      this.service.updateRoleData(this.reactiveForm.value).subscribe((res:any)=>{
          console.log(res,"response from the role post api")
      })
      
    }

  }



}
