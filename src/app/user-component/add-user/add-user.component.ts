import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/customServices/data.service';
import { States } from 'src/app/_interfaces/appInterfaces';
import { Branches } from 'src/app/_interfaces/appInterfaces';
// import { Role } from 'src/app/user-role-component/add-user-role/add-user-role.component';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
states:any
branches = new FormControl<string | Branches>('');
Branches:Branches[]
selectedBranch: Observable<Branches[]>;



public form: FormGroup;
constructor(private formBuilder: FormBuilder,
  private service: DataService,
  private router: Router,){

}
ngOnInit(): void {


    this.states = ['East','West','North','South']
    this.initForm()
    // this.selectedState = this.region.valueChanges.pipe(
    //   startWith(''),
    //   map((value:any) => {
    //     const Role = typeof value === 'string' ? value : value?.state;
    //     return Role ? this._filterOfState(Role as string) : this.States.slice();
    //   }),
    // );

  
      this.Branches = this.service.getBranchIds().map((res:any)=>{
        return {branchId:res}
      })
      console.log(  this.Branches )
      this.initForm()
      this.selectedBranch = this.branches.valueChanges.pipe(
        startWith(''),
        map((value:any) => {
          const UserName = typeof value === 'string' ? value : value?.UserName;
          return UserName ? this._filterOfBranch(UserName as string) : this.Branches.slice();
        }),
      );

    


  this.initForm()

}
initForm() {
  this.form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    region: ['', Validators.required],

  })}

  submitbutton(){
let formData = {...this.form.value, ...this.branches.value as object}
console.log(formData)
 }
  



       displayFnOfBranch(branch: Branches): string {
        return branch && branch.branchId ? branch.branchId : '';
      }
    
      private _filterOfBranch(branch: string): Branches[] {
        const filterValue = branch.toLowerCase();
        return this.Branches.filter(option => option.branchId.toLowerCase().includes(filterValue));
      }



}
