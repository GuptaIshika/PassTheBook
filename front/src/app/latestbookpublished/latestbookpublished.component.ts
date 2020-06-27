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
      
    this.d.getbooks().subscribe((data)=>{
      alert(JSON.stringify(data))
      if(data.status)
      {
       this.bookpost = data.data;
      }
      else{
        alert("document not found");
      }
    })
 }

 sendReq(p)
 {
   alert(JSON.stringify(p))
 }


}

