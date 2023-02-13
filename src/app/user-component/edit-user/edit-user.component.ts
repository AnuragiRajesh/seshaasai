import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/customServices/data.service';
import { States } from 'src/app/_interfaces/appInterfaces';
import { Branches } from 'src/app/_interfaces/appInterfaces';
// import { Role } from 'src/app/user-role-component/add-user-role/add-user-role.component';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  states:any
  branches = new FormControl<string | Branches>('');
  Branches:Branches[]
  selectedBranch: Observable<Branches[]>;
  
  
  
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private service: DataService,
    private route: ActivatedRoute,){
  
  }
  ngOnInit(): void {
  
  
    this.route.queryParams.subscribe((res:any)=>{
      this.branches.setValue({branchId:`${res['Branch ID']}`})
      this.form = this.formBuilder.group({
        firstName: [res.User, Validators.required],
        lastName: ['', Validators.required],
        phone: [res['Phone Number'], Validators.required],
        email: [res['Email ID'], Validators.required],
        region: [res.Region, Validators.required],
    
      })
     console.log(res,"jjjjjbbjkb")
    })
      this.states = ['East','West','North','South']
      // this.initForm()
  
  
    
        this.Branches = this.service.getBranchIds().map((res:any)=>{
          return {branchId:res}
        })
        console.log(  this.Branches )
        // this.initForm()
        this.selectedBranch = this.branches.valueChanges.pipe(
          startWith(''),
          map((value:any) => {
            const UserName = typeof value === 'string' ? value : value?.UserName;
            return UserName ? this._filterOfBranch(UserName as string) : this.Branches.slice();
          }),
        );
  
      
  
  
    // this.initForm()
  
  }
  // initForm() {
  //   this.form = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     email: ['', Validators.required],
  //     region: ['', Validators.required],
  
  //   })}
  
    submitbutton(){
      // combined two forms 
  let formData = {...this.form.value, ...this.branches.value as object}
  console.log(formData)
  // this.service.postUserData(formData).subscribe((res:any)=>{
  //   console.log("respone after the postuser api", res)
  // })
   }
    
  
  
  
         displayFnOfBranch(branch: Branches): string {
          return branch && branch.branchId ? branch.branchId : '';
        }
      
        private _filterOfBranch(branch: string): Branches[] {
          const filterValue = branch.toLowerCase();
          return this.Branches.filter(option => option.branchId.toLowerCase().includes(filterValue));
        }
  



}
