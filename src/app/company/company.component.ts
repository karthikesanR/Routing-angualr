import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {

  comList:any;
// list: any;
  constructor( private s:ServiceService ,private route:Router ){}
  ngOnInit(): void {
    this.s.getComp().subscribe((data)=>this.comList=data)
    console.log(this.comList)
  }
 
  list1(id:number){
    this.route.navigate(['company',id])
  }
}
