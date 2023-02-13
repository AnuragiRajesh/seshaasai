import { FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/customServices/data.service';
import { map, Observable, of, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/_interfaces/appInterfaces';

@Component({
  selector: 'app-edit-user-role',
  templateUrl: './edit-user-role.component.html',
  styleUrls: ['./edit-user-role.component.scss']
})
export class EditUserRoleComponent implements OnInit {

  // protected users:User[] = [{Id:"333","Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{Id:"333","Name":"Kizziz","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},]
  user = ''
  role = new FormControl<string | {Role:string}>('');
  roleID=undefined
  roleUserID=''
  optionsOfRoles: Role[] 
  filteredOptionsOfRoles: Observable<Role[]>;
  // optionsOfUsers: User[] 
  // filteredOptionsOfUsers: Observable<User[]>;

  constructor(
    private service: DataService,
    private route: ActivatedRoute,
   ) {


  }
  ngOnInit() {

    this.route.queryParams.subscribe((res:any)=>{
      this.roleUserID=res.Id
      this.user=res['User Name']
      // this.roleID=
      this.role.setValue({  Role:res['Roll assigned']});
console.log(res)
    })

    this.service.getRoleData().subscribe((res: any) => {
      this.optionsOfRoles = res.map((ele:any)=>{
        return { Role: ele.Name, RoleId:ele.Id}
      })
      console.log(this.optionsOfRoles, "gg")
      // this.initForm()
      this.filteredOptionsOfRoles = this.role.valueChanges.pipe(
        startWith(''),
        map((value:any) => {
          const Role = typeof value === 'string' ? value : value?.role;
          return Role ? this._filterOfRoles(Role as string) : this.optionsOfRoles.slice();
        }),
      );
    });



    
  }




  displayFnOfRoles(role: Role): string {
  
    return role && role.Role ? role.Role : '';
  }

  private _filterOfRoles(UserName: string): Role[] {
    const filterValue = UserName.toLowerCase();
    return this.optionsOfRoles.filter(option => option.Role.toLowerCase().includes(filterValue));
  }
  selectOptionOfRole(option:any){
    console.log(option)
    this.roleID=option.RoleId
  }

 
  submitbutton() {
    this.roleID?alert( this.roleID):alert("00000")
   console.log( {roleUserId:this.roleUserID,roleId:this.roleID})
    // this.service.PostUserRoleData({userId:this.userID,roleId:this.roleID}).subscribe((res:any)=>{
      console.log(this.roleUserID ,"hhhhh",this.roleID)
      
    // })
  }





}
