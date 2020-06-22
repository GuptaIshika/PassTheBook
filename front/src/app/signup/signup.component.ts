import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstnameprop;
  lastnameprop;
  emailprop;
  passwordprop;
  codeprop;
  numberprop;

  constructor(private ds:DataService ,private router:Router) { }

  ngOnInit(): void {
  }

  signup()
  {
    alert("in sign up");
      this.ds.signup({firstname:this.firstnameprop,lastname:this.lastnameprop,email:this.emailprop,password:this.passwordprop,code:this.codeprop,number:this.numberprop})
      .subscribe((response)=>{
        if(response.status=="ok"){
         
         
          alert("registration sucessful you will be redirected to login");
          this.router.navigate(['/login']);                                   }

          else{
            alert("this mail_id is already used for registration!!!");
          }                         
      
      
      }
      )  
  }

}
