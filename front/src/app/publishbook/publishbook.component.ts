import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

constructor(private ds:DataService,private router:Router) { }
 ngOnInit(): void {
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

