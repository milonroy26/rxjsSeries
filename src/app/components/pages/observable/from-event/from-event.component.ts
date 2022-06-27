import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit {
  public count = 2;
  public counts:string[]= ['video 1'];

  constructor() { }

  ngOnInit(): void {
  }

  addBtn(){
    this.counts.push("Video"+ this.count++);
  }
}
