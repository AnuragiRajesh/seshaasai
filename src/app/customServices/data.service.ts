import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
public _Dashboard_API: string = "http://172.17.131.162:8100/api/PushData/GetData";
public _User_role_API:string ="http://172.17.131.162:3100/api/Users/GetClaims"
public _User_API:string ="http://172.17.131.162:3100/api/Users"


  constructor(public http: HttpClient) {}

  getDashboardData() {
   return this.http.get(this._Dashboard_API);
 }
 getUserData() {
  return this.http.get(this._User_API);
}
 getUserRoleData() {
  return this.http.get(this._User_role_API);
}

  // getImage(id: number) {
  //   return this.http.get(this._url)
  //                   .pipe(first(item => item.id === id));
  // }
}
