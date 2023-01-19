import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  profileForm = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
  });




  constructor(private router: Router){

  }
  ngOnInit(): void {
  }
  submitbutton(){
console.log(this.profileForm.value,"its coming here")
if ((this.profileForm.value.userName == "Japit" && this.profileForm.value.userPassword == "Asdf@1234") ||(this.profileForm.value.userName == "Hari" && this.profileForm.value.userPassword == "Asdf@12345")) {
  // window.location.href = 'http://172.17.130.188:8858';
  this. router. navigate(['/home'])
} else {
  alert("Invalid username or password. Please try again.");
} 
  }
}
