// import { Component,OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/customServices/data.service';
import { map, Observable, of, startWith } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Role, User } from 'src/app/_interfaces/appInterfaces';

@Component({
  selector: 'app-add-user-role',
  templateUrl: './add-user-role.component.html',
  styleUrls: ['./add-user-role.component.scss']
})
export class AddUserRoleComponent implements OnInit {

  
  // protected users:User[] = [{Id:"333","Name":"Harees","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},{Id:"333","Name":"Kizziz","Date Added":"19/112022", "Region":"East","Branch ID":1000123,"Phone Number":8989674523,"Email ID":'garima.jain@outlook.com'},]
  users = new FormControl<string | User>('');
  roles = new FormControl<string | Role>('');
  roleID:string[]=[]
  userID=''
  optionsOfRoles: Role[] 
  filteredOptionsOfRoles: Observable<Role[]>;
  optionsOfUsers: User[] 
  filteredOptionsOfUsers: Observable<User[]>;

  constructor(
    private service: DataService,
    private router: Router,) {


  }
  ngOnInit() {
    this.service.getUserWithOutRoleData().subscribe((res: any) => {
      console.log(res, "ggiiiiiiiiii")
      this.optionsOfUsers = res.map((ele:any)=>{
        return { UserName: `${ele.UserName} | ${ele.BranchID}`,UserId:ele.Id}
      })
      // this.initForm()
      this.filteredOptionsOfUsers = this.users.valueChanges.pipe(
        startWith(''),
        map((value:any) => {
          const UserName = typeof value === 'string' ? value : value?.UserName;
          return UserName ? this._filterOfUsers(UserName as string) : this.optionsOfUsers.slice();
        }),
      );

    });

    this.service.getRoleData().subscribe((res: any) => {
      this.optionsOfRoles = res.map((ele:any)=>{
        return { Role: ele.Name, RoleId:ele.Id}
      })
      console.log(this.optionsOfRoles, "gg")
      // this.initForm()
      this.filteredOptionsOfRoles = this.roles.valueChanges.pipe(
        startWith(''),
        map((value:any) => {
          const Role = typeof value === 'string' ? value : value?.role;
          return Role ? this._filterOfRoles(Role as string) : this.optionsOfRoles.slice();
        }),
      );
    });



    
  }

  displayFnOfUsers(user: User): string {
    // this.userID=user.UserId
    return user && user.UserName ? user.UserName : '';
  }

  private _filterOfUsers(UserName: string): User[] {
    const filterValue = UserName.toLowerCase();
    return this.optionsOfUsers.filter(option => option.UserName.toLowerCase().includes(filterValue));
  }

  displayFnOfRoles(role: Role): string {
   
//  this.roleID.push(role.RoleId)
//  console.log(this.roleID,"ssss")
    return role && role.Role ? role.Role : '';
  }

  private _filterOfRoles(UserName: string): Role[] {
    const filterValue = UserName.toLowerCase();
    return this.optionsOfRoles.filter(option => option.Role.toLowerCase().includes(filterValue));
  }
  selectOptionOfRole(option:any){
    this.roleID=option.RoleId
  }
  selectOptionOfUser(option:any){
this.userID=option.UserId
  }
 
  submitbutton() {
    this.service.PostUserRoleData({userId:this.userID,roleId:this.roleID}).subscribe((res:any)=>{
      console.log(res)
      
    })
  }







}
