import { Component,OnInit } from '@angular/core';
import{ServiceService}from'../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  empList:any;
  
  constructor( private s:ServiceService,private route:Router){}
  ngOnInit(): void {
    this.s.getEmp().subscribe((data)=>this.empList=data)
    console.log(this.empList)
  }
  list(id:number){
    this.route.navigate(['employee',id])
  }
 

}
