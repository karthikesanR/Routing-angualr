import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.scss']
})
export class Detail2Component implements OnInit {

 
arr2:any=[];
  constructor(public s:ServiceService ,private active:ActivatedRoute ){}
  ngOnInit(): void {
    let id=this.active.snapshot.paramMap.get("id");
    
    this.s.getById2(id).subscribe((data)=>this.arr2=data
    )
  }
}
