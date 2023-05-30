import { Component,OnInit } from '@angular/core';
import{ServiceService}from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{
arr:any=[];
// arr2:any=[];
  constructor(public s:ServiceService ,private active:ActivatedRoute){}
  ngOnInit(): void {
    let id=this.active.snapshot.paramMap.get("id");
    this.s.getById(id).subscribe((data)=>this.arr=data
    )
    // this.s.getById2(id).subscribe((data)=>this.arr2=data
    // )
  }
  

}
