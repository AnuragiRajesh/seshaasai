import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { DataService } from 'src/app/customServices/data.service';
import { Observable } from 'rxjs';




// import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { ItemService } from './item.service';




@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  users = [];
  selectedItem = null;


  dropdownSettings: IDropdownSettings = {};
  public Users: any
  public Role_Title:string[]

  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: DataService,
    private router: Router,){

      this.service.getUserData().subscribe((res:any) => {
        this.users = res.map((user:any)=>{
          return user.UserName
        })
        console.log(this.users,"gg")
      });
  
  }
  ngOnInit(): void {
    this.service.getRoleData().subscribe((res:any)=>{
 this.Role_Title = res.map((ele:any)=>{
        return ele.Name
      })
      // console.log(user)

    })
    this.initForm()
    // this.Role_Title = [
    //   { item_id: 1, item_text: 'All Access' },
    //   { item_id: 2, item_text: "Mobile number access" },
    //   { item_id: 3, item_text: "E-mail only access" },
     
    // ];

    this.Users = [
      {  item_text: 'View only' },
      {  item_text: "View and edit all" },
      {  item_text: "View and edit limited" },
     
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
      users: ['', Validators.required],
      role_title: ['', Validators.required],
   
    })}
  
    submitbutton(){
  console.log(this.form.value)
    }

  




}
