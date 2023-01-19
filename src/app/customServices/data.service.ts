import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
public _url: string = "http://172.17.131.162:8100/api/PushData/GetData";

  constructor(public http: HttpClient) {}

  availableData() {
   return this.http.get(this._url);
 }

  // getImage(id: number) {
  //   return this.http.get(this._url)
  //                   .pipe(first(item => item.id === id));
  // }
}
