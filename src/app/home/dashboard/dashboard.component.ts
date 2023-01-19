import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private elementRef:ElementRef){

  }
  ngOndestroy() {
    debugger
    this.elementRef.nativeElement.remove();
    console.log("dhkgf")
  }
}
