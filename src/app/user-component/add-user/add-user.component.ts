import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators ,AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/customServices/data.service';
import { States } from 'src/app/_interfaces/appInterfaces';
import { Branches } from 'src/app/_interfaces/appInterfaces';
// import { Role } from 'src/app/user-role-component/add-user-role/add-user-role.component';
import { emailValidator } from 'src/app/form-validator.directive';
import { phoneValidator } from 'src/app/form-validator.directive';

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  region: string;
  phone:number;
  branch: boolean;
}




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  reactiveForm: FormGroup;
  user: IUser;
  states:any
  dropdownSettings:any
  branches:any
  hover=false

  constructor(  private service: DataService,) {
    this.user = {} as IUser;
  }

  ngOnInit(): void {



    this.states = ['East','West','North','South']
    this.branches= this.service.getBranchIds();  
      this.dropdownSettings = {
        idField: 'item_id',
        textField: 'item_text',
        itemsShowLimit:1,
        // [enableSearch]="true",
        allowSearchFilter: true,
      };




    this.reactiveForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [
        Validators.required,
        Validators.maxLength(250),
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.maxLength(250),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.maxLength(250),
        emailValidator(),
      ]),

      region: new FormControl(this.user.region, [
        Validators.required,
      ]),

      branch: new FormControl(this.user.branch, [
        Validators.required,
      ]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.minLength(10),
        phoneValidator()
      ]),
    });
  }

  get firstName() {
    return this.reactiveForm.get('firstName')!;
  }

  get lastName() {
    return this.reactiveForm.get('lastName')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }
  get phone() {
    return this.reactiveForm.get('phone')!;
  }
  get region() {
    return this.reactiveForm.get('region')!;
  }
  get branch() {
    return this.reactiveForm.get('branch')!;
  }

  public submitbutton(): void {
    for (const controlName of Object.keys(this.reactiveForm.controls)) {
      const control = this.reactiveForm.controls[controlName];
      control.markAsTouched();
    }
  
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value)
      this.service.postUserData(this.reactiveForm.value).subscribe((res:any)=>{
          console.log("respone after the postuser api", res)
        })
    }

  }
}