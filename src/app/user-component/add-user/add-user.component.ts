import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
dropdownSettings: IDropdownSettings = {};
public branch_Id: any
public form: FormGroup;
constructor(private formBuilder: FormBuilder,
  private router: Router,){

}
ngOnInit(): void {
  this.initForm()
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
initForm() {
  this.form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    branch_Id: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],

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
