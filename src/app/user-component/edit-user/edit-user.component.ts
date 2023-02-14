import { Component,OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { map, Observable, startWith } from 'rxjs';
import { DataService } from 'src/app/customServices/data.service';
import { States } from 'src/app/_interfaces/appInterfaces';
import { Branches } from 'src/app/_interfaces/appInterfaces';


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
      console.log(res,"hhh")
      this.branches.setValue({branchId:`${res['Branch ID']}`})
      this.form = this.formBuilder.group({
        Id: [res.Id, Validators.required],
        firstName: [res.User, Validators.required],
        lastName: [res.LastName, Validators.required],
        phone: [res['Phone Number'], Validators.required],
        email: [res['Email ID'], Validators.required],
        region: [res.Region, Validators.required],
    
      })
     console.log(res,"jjjjjbbjkb")
    })
      this.states = ['East','West','North','South']
  
  
    
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
  
      
  
  

  
  }

  
    submitbutton(){
      // combined two forms 
  let formData = {...this.form.value, ...this.branches.value as object}
  console.log(formData)
  this.service.updateUserData(formData).subscribe((res:any)=>{
    console.log(res, "response from the update api ")
  })
 
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
