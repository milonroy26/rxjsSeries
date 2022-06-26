import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Laptop {
    name: string,
    color: string,
    disk: number,
    brand: string,
    available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public laptops: Laptop[] = [
    {
      name: "Hp11",
      color: "Red",
      disk: 512,
      brand: "HP",
      available: true
    },
    {
      name: "Dell12",
      color: "Blue",
      disk: 700,
      brand: "DELL",
      available: false
    },
    {
      name: "lenovo13",
      color: "Blue",
      disk: 700,
      brand: "lenovo",
      available: false
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  dellAvailable(){
    let laptops = [];
    for(let laptop of this.laptops){
      if(laptop.brand == "HP"){
        if(laptop.available == true){
          laptops.push(laptop);
        }
      }
    }
    if(laptops.length == 0){
      return "Dell Not Available";
    }else{
      return laptops;
    }
  }


  hpAvailable(){
    let laptops = [];
    for(let laptop of this.laptops){
      if(laptop.brand == "DELL"){
        if(laptop.available == true){
          laptops.push(laptop);
        }
      }
    }
    if(laptops.length == 0){
      return "HP Not Available";
    }else{
      return laptops;
    }
  }


  postData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
