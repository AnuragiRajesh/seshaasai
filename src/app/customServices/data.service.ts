import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { rolesTableColumns } from '../_interfaces/appInterfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public _Dashboard_API: string = "http://172.17.131.162:8100/api/PushData/GetData";
  public _User_role_API: string = "http://172.17.131.162:3100/api/Users/GetClaims"
  public _User_API: string = "http://172.17.131.162:3100/api/Users"
  public _User_withOut_Role__API: string = "http://172.17.131.162:3100/api/Users/NewUser"
  public _Role_API: string = "http://172.17.131.162:3100/api/Roles"








  constructor(public http: HttpClient) { }
  getDashboardData() {
    return this.http.get(this._Dashboard_API);
  }
  getUserData() {
    return this.http.get(this._User_API);
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
  updateRoleData(id: any, params: any) {
    console.log(id, params, "jjjjj")
    return this.http.put(`${this._Role_API}/04894d7c-efe3-4bfb-81e7-2464a55159a1`, params);
  }
  deleteRoleData(id: any) {
    return this.http.delete(`${this._Role_API}/${id}`);
  }
  getUserRoleData() {
    return this.http.get(this._User_role_API)
  }
  PostUserRoleData(params: any) {
    return this.http.post(`${this._Role_API}/AssignRole`, params)
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





