import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-promoise',
  templateUrl: './promoise.component.html',
  styleUrls: ['./promoise.component.scss']
})
export class PromoiseComponent implements OnInit {
  
  public userData:any;

  constructor(
    private API: ApiService
  ) { }
  
  ngOnInit(): void {
    console.log(this.API.dellAvailable())
    
  }

  loadData(){
    this.API.postData().subscribe(data => {
      this.userData = data;
    }, error => {
      console.log(error)
    })
  }
}
