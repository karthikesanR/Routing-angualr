import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url="http://localhost:3000"
  url1="http://localhost:3000/get/"
  url2="http://localhost:3000/getall/"
  
  

  constructor(private http:HttpClient) { }

  getEmp(){
    return this.http.get(this.url+"/get")
  }
  getComp(){
    return this.http.get(this.url+"/getall")
  }
  getById(id:string|null){
    return this.http.get(this.url1+id)
  }
  getById2(id:string|null){
    return this.http.get(this.url2+id)
  }
}
