import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public inName:string = '';
  public inEmail:string = '';
  public issue:string = '';
  public message:string = '';

  constructor(
    private contact: ContactService,
  ) { }

  ngOnInit(): void {
    this.contact.mesageList()
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    })
  }

  userData(){
    this.contact.sendMesage(this.inName, this.inEmail, this.issue, this.message)
    .subscribe(data => {
      console.log(data);
      alert(`${data.name} Your Message Sent`);
    }, error => {
      console.log(error);
      alert("Not a Message Sent");
    })
  }
}
