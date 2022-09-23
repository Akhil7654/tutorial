import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent implements OnInit {

  loan={
    name:"",
    amount:"",
    interest:"",
    period:""
  }

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  Addloan(){
    console.log(this.loan)
    this.api.addloan(this.loan).subscribe(
      (data)=>{
        console.log(data)
        alert("SUCCESS");
      }
    )
  }

}
