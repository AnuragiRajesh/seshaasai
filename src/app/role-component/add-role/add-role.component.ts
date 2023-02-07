import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  public roll_access: any
  public view: any
  public rights: any

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,){
  
  }
  ngOnInit(): void {
    this.initForm()
    this.roll_access = [
      { item_id: 1, item_text: 'All Access' },
      { item_id: 2, item_text: "Mobile number access" },
      { item_id: 3, item_text: "E-mail only access" },
     
    ];
    this.view = [
      { item_id: 1, item_text: 'All metrics' },
      { item_id: 2, item_text: "Audit only" },
      { item_id: 3, item_text: "Branch recon only" },
      { item_id: 1, item_text: 'Inventory check only' },
      { item_id: 2, item_text: "No. of open account only" },
      { item_id: 3, item_text: "No. of closed account only" },
     
    ];
    this.rights = [
      { item_id: 1, item_text: 'View only' },
      { item_id: 2, item_text: "View and edit all" },
      { item_id: 3, item_text: "View and edit limited" },
     
    ];





    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      // showSelectedItemsAtTop: 5,
      itemsShowLimit: 1,
    };
  
  }
  initForm() {
    this.form = this.formBuilder.group({
      Rool_Title: ['', Validators.required],
      Rool_Access: ['', Validators.required],
      View: ['', Validators.required],
      Rights: ['', Validators.required],
      Roll_Des: ['', Validators.required],
  
    })}
  
    submitbutton(){
  console.log(this.form.value)
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
  






}
