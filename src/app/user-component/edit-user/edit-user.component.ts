import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/customServices/data.service';
import { States } from 'src/app/_interfaces/appInterfaces';
import { Branches } from 'src/app/_interfaces/appInterfaces';
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
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: IUser;
  states:any
  branches:any
  Branches:string[]
  selectedBranch: Observable<Branches[]>;
  hover=false
  
  
  
  public reactiveForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: DataService,
    private route: ActivatedRoute,){
  
  }
  ngOnInit(): void {
  
  
    this.route.queryParams.subscribe((res:any)=>{
      // console.log(res,"hhh")
      // this.branches.setValue({branchId:`${res['Branch ID']}`})
      this.reactiveForm = this.formBuilder.group({
        // Id: [res.Id, Validators.required],
       firstName: new FormControl(res.FirstName, [
        Validators.required,
        Validators.maxLength(250),
      ]),
      lastName: new FormControl('kk', [
        Validators.required,
        Validators.maxLength(250),
      ]),
      phone: new FormControl(res['Phone Number']  , [
        Validators.required,
        Validators.minLength(10),
        phoneValidator()
      ]),
      email: new FormControl(res['Email ID'], [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      region: new FormControl(res.Region, [
        Validators.required,
      ]),
      branch: new FormControl(res['Branch ID'], [
        Validators.required,
      ]),
        // lastName: [res.LastName,  
        //   Validators.required,
        //   Validators.minLength(6),
        //   Validators.maxLength(250),],
        // phone: [res['Phone Number'],
        // Validators.required,
        // Validators.minLength(10),
        // phoneValidator()],
        // email: [res['Email ID'],
        //   Validators.required,
        //   Validators.minLength(1),
        //   Validators.maxLength(250),
        //   emailValidator(),],
        //   region: [res.Region, Validators.required],
        // branch: [res['Branch ID'], Validators.required],
        

      })
      
    })
    this.branches= this.service.getBranchIds();  
      this.states = ['East','West','North','South']
  
  
    
        this.Branches = this.service.getBranchIds().map((res:any)=>{
          return res
        })
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
    submitbutton(){
      for (const controlName of Object.keys(this.reactiveForm.controls)) {
        const control = this.reactiveForm.controls[controlName];
        control.markAsTouched();
      }
    
      if (this.reactiveForm.valid) {
        console.log(this.reactiveForm.value)
        // this.service.updateUserData(this.reactiveForm.value).subscribe((res:any)=>{
        //   console.log(res, "response from the update api ")
        // })
        
      }

 

   }
    
  


}
