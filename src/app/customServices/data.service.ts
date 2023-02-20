import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { rolesTableColumns } from '../_interfaces/appInterfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _Login_API:string= 'http://172.17.131.162:3100/api/Login'
  public _Dashboard_API: string = "http://172.17.131.162:8100/api/PushData/GetData";
  public _User_role_API: string = "http://172.17.131.162:3100/api/Users/GetClaims"
  public _User_API: string = "http://172.17.131.162:3100/api/Users"
  public _User_withOut_Role__API: string = "http://172.17.131.162:3100/api/Users/NewUser"
  public _Role_API: string = "http://172.17.131.162:3100/api/Roles"








  constructor(public http: HttpClient) { }
 loginApi(parmas:any): Promise<any>  {
    // return this.http.post(this._Login_API,parmas);

    return fetch(this._Login_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(parmas)
    })
  }
  getDashboardData() {
    return this.http.get(this._Dashboard_API);
  }

  /* 
  @  Handled all the User component Apis
   */
  getUserData() {
    return this.http.get(this._User_API);
  }
  postUserData(params:any) {
    return this.http.post(`${this._User_API}/AddUser`, params);
  }
  updateUserData(params:any) {
    return this.http.put(`${this._User_API}`, params);
  }
  deleteUserApi(Id:any) {
    console.log(Id,"hhhh")
    return this.http.delete(`${this._User_API}/${Id}`);
  }





  getUserWithOutRoleData() {
    return this.http.get(this._User_withOut_Role__API);
  }
  getRoleData() {
    return this.http.get(this._Role_API);
  }
  postRoleData(params: any) {
    return this.http.post(`${this._Role_API}/AddRole`, params);
  }
  updateRoleData( params: any) {
    console.log( params, "jjjjj")
    return this.http.put(this._Role_API, params);
  }
  deleteRoleData(id: any) {
    return this.http.delete(`${this._Role_API}/${id}`);
  }
  getUserRoleData() {
    return this.http.get(this._User_role_API)
  }
  assignNewRole(params: any) {
    return this.http.post(`${this._Role_API}/AssignRole`, params)
  }
  updateAssignedRole(params: any) {
    return this.http.put(`${this._Role_API}/UpdateAssignRoleById`, params)
  }



  isLoggedIn(){
    return true
  }
  // getImage(id: number) {
  //   return this.http.get(this._url)
  //                   .pipe(first(item => item.id === id));
  // }
  getBranchIds() {
    return ["1000123",
      "1000124",
      "1000125",
      "1000126",
      "1000127",
      "1001128",
      "1000129",
      "1000130",
      "1000131",
      "1000132",]
  }
}





