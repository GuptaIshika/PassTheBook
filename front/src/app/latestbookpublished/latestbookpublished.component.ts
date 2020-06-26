import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-latestbookpublished',
  templateUrl: './latestbookpublished.component.html',
  styleUrls: ['./latestbookpublished.component.css']
})
export class LatestbookpublishedComponent implements OnInit {
  bookpost:any;
  

  constructor(private d :DataService) { }

  ngOnInit(): void {
      
    this.bookpost.getbooks().subscribe((data)=>{
      if(data.status==true)
      {
       this.bookpost= data;
      }
      else{
        alert("document not found");
      }
    })
 }

}
