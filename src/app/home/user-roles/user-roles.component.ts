import { Component, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.scss']
})
export class UserRolesComponent implements OnInit {
  constructor(private elementRef:ElementRef){

  }
  ngOnInit(): void {
    console.log("ooooo")
  }
    ngOndestroy() {
    debugger
    this.elementRef.nativeElement.remove();
    console.log("dhkgf")
  }
}
