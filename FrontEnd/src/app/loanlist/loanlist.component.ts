import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-loanlist',
  templateUrl: './loanlist.component.html',
  styleUrls: ['./loanlist.component.css']
})
export class LoanlistComponent implements OnInit {

  loan={
    name:"",
    amount:"",
    interest:"",
    period:""
  }

  constructor(private api:ApiService) {
    api.viewloan().subscribe(
      (response)=>{
        this.data=response
      }
    )
   }

  ngOnInit(): void {
  }
  onEdit(item:any) {
    item.isEdit = true
  }
  Deleteloan(datas:any){
    this.api.deleteloan(datas._id).subscribe(
      (data)=>{
         console.log(data);
         this.data = this.data.filter((u:any)=>u!==datas)
      }
    )
  }

  Updateloan(i:any){
  
    console.log()
    this.api.updateloan(i).subscribe(
      (data)=>{
        console.log(data)
        window.location.reload()
      }
      
    )
  }

  data:any=[]

}
