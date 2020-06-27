import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-publishbook',
  templateUrl: './publishbook.component.html',
  styleUrls: ['./publishbook.component.css']
})
export class PublishbookComponent implements OnInit {
  categoryprop;
  titleprop;
  priceprop;
  imgprop;
  countryprop;
  stateprop;
  cityprop;
  fullnameprop;
  numberprop;
  emailprop;
  dateprop;

  countries;

constructor(private ds:DataService,private router:Router,private http:HttpClient) { }
 ngOnInit(): void {

  
  var headers = new HttpHeaders();
  headers.set('Accept',"application/json");
  headers.set('api-tocken', "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ");
  headers.set('user-email','sanjayrathore144@gmail.com');
  

  this.http.get('https://www.universal-tutorial.com/api/getaccesstoken', {headers:headers})
            .subscribe((authTocken:any)=>{
              alert("got auth tocken"+ JSON.stringify(authTocken));
              var authheader = "Bearer "+authTocken.auth_token
              console.log(authheader);
              
              headers = new HttpHeaders();
              headers.set("Authorization",authheader);
              headers.set('api-tocken', "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ");
              headers.set('Accept',"application/json");
              this.http.get('https://www.universal-tutorial.com/api/countries/', {headers:headers}).
              subscribe((cts)=>{                                                                               
                         alert("got countries list"+JSON.stringify(cts));
                         this.countries =cts;
                  })

            })









  }
publish()
{
  alert("in publish");
  this.ds.publish({category:this.categoryprop,title:this.titleprop,price:this.priceprop,image:this.imgprop,country:this.countryprop,state:this.stateprop,city:this.cityprop,fullname:this.fullnameprop,number:this.numberprop,email:this.emailprop,date:this.dateprop})
  .subscribe((response)=>{
  if(response.status=="ok")
          {
            alert("your book is being published for sell");
            this.router.navigate(['/dashboard']);
           }
  else{
    alert("there is some  error in publishing your book!!");
  }


  }

  )

}
}

