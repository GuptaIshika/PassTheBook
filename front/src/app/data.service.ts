import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

signup(d):any
{  
  alert(JSON.stringify(d));
  return this.http.post('http://localhost:3000/signup',d);
}

login(d):any
{  alert(JSON.stringify(d));
  return this.http.post('http://localhost:3000/login',d);
}

publish(d):any
{
  alert(JSON.stringify(d));
  return this.http.post('http://localhost:3000/publish',d)
}

getAllCountries()
{
  var headers = new HttpHeaders();
  headers.set('Accept',"application/json");
  headers.set('api-tocken', "AuXnFjES43NqbdODZoc1anLtpO9op_9HsA7hqU56HJoxlbbNrMsUAzmsp6cqoZ0HhWQ");
  headers.set('user-email','sanjayrathore144@gmail.com');
  var responseCountriesOb;

  this.http.get('https://www.universal-tutorial.com/api/getaccesstoken', {headers:headers})
            .subscribe((authTocken:any)=>{
              headers = new HttpHeaders();
              headers.set("Authorization","Bearer "+authTocken.auth_token);
              headers.set('Accept',"application/json");
              responseCountriesOb = this.http.get('https://www.universal-tutorial.com/api/countries/', {headers:headers})

            })
}



}
