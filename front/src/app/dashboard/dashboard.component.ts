import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstname;
  email;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    

    this.firstname=localStorage.getItem('firstname');
    this.email=localStorage.getItem('email');

  }

}
