import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

signup(d):any
{  
  alert(JSON.stringify(d));
  return this.http.post("http://localhost:3000/signup",d);
}

login(d):any
{
  return this.http.post("http//localhost:3000/login",d);
}

}
