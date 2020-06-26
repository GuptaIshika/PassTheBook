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

getbooks():any
{
   return this.http.get('http://localhost:3000/getbooks');
}

}