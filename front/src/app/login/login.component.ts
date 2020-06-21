import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailprop;
  passwordprop;

  constructor(private router:Router ,private ds:DataService) { }

  ngOnInit(): void {
                        if(localStorage.getItem('email'))
                        {
                          this.router.navigate(['/dashboard']);
                        }


  }
  login()
  {
      this.ds.login({email:this.emailprop,password:this.passwordprop})
      .subscribe((response)=>{
        if(response.status=="ok")
         {
           localStorage.setItem('firstname',response.data[0].firstname);
           localStorage.setItem('email',response.data[0].email);
           this.router.navigate(['/dashboard']);
         }
         else{
           alert("credentials are incorrect!!");
         }

      }
      
      )    


  }
     
}   

  
