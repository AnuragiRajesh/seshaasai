import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../customServices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  showError=false
  profileForm = new FormGroup({

    UserName: new FormControl('', Validators.required),
    Password: new FormControl('',  Validators.minLength(6)),

  });


  form: FormGroup;

  constructor(private router: Router,
    private service:DataService){
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)])
      });
  }
  ngOnInit(): void {
  }
  submitbutton(){
    // console.log(this.profileForm.value)
    this.service.loginApi(this.profileForm.value).then(response => {
      // console.log(response)
      if (!response.ok) {
        this.showError=true;
        setTimeout(()=>{
          this.showError=false
        }, 4000)
        return
    //  throw new Error('Network response was not ok');
      }
      console.log(response)
      response.json();
   this. router. navigate(['/home'])

    })
    

    
  }


// console.log(this.profileForm.value,"its coming here")
// if ((this.profileForm.value.userName == "Japit" && this.profileForm.value.userPassword == "Asdf@1234") ||(this.profileForm.value.userName == "Hari" && this.profileForm.value.userPassword == "Asdf@12345")) {
//   // window.location.href = 'http://172.17.130.188:8858';
// } else {
//   alert("Invalid username or password. Please try again.");
// } 
//   }
}
