
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import csc from 'country-state-city';

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
  bookImage;

  countries;
  states;
  cities;

constructor(private ds:DataService,private router:Router,private http:HttpClient) { }
 ngOnInit(): void {

  console.log(csc);
  this.countries = csc.getAllCountries();
  console.log(this.countries);
  
  // var headers = new HttpHeaders();
  // headers.set('Accept',"application/json");
  // headers.set('api-tocken', "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ");
  // headers.set('user-email','sanjayrathore144@gmail.com');
  

  // this.http.get('https://www.universal-tutorial.com/api/getaccesstoken', {headers:headers})
  //           .subscribe((authTocken:any)=>{
  //             alert("got auth tocken"+ JSON.stringify(authTocken));
  //             var authheader = "Bearer "+authTocken.auth_token
  //             console.log(authheader);
              
  //             headers = new HttpHeaders();
  //             headers.set("Authorization",authheader);
  //             headers.set('api-tocken', "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ");
  //             headers.set('Accept',"application/json");
  //             this.http.get('https://www.universal-tutorial.com/api/countries/', {headers:headers}).
  //             subscribe((cts)=>{                                                                               
  //                        alert("got countries list"+JSON.stringify(cts));
  //                        this.countries =cts;
  //                 })

  //           })









  }


  loadState()
  {
    this.states = csc.getStatesOfCountry(this.countryprop);
  }

  getFile(e)
  {
    this.bookImage = e.target.files[0];
  }

  loadCities()
  {
    this.cities = csc.getCitiesOfState(this.stateprop);
  }

publish()
{
  alert("in publish");

  var formData = new FormData();
  formData.set('category',this.categoryprop );
  formData.set('title',this.titleprop );
  formData.set('price',this.priceprop );
  formData.set('country',this.countryprop );
  formData.set('state',this.stateprop );
  formData.set('city',this.cityprop );
  formData.set('fullname',this.fullnameprop );
  formData.set('phoneNumber',this.numberprop );
  formData.set('email',this.emailprop );
  formData.set('date',this.dateprop );
  formData.set('image', this.bookImage)

  this.ds.publish(formData)
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

