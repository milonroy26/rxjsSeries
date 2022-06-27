import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(
    private http: HttpClient
  ) { }

  sendMesage(name:string, email:string, issue: string, message:string):Observable<any>{
    const jsonFormet = {
      name: name,
      email: email,
      issue: issue,
      message: message,
    }
    const url = 'https://jsengine.herokuapp.com/contact/message/send';
    return this.http.post<any>(url, jsonFormet);
  }

  mesageList():Observable<any>{
    const url = 'https://jsengine.herokuapp.com/contact/message/0/100';
    return this.http.get<any>(url, {headers: {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkZTRiMDMxYjNlYTAwMDQ2ZjM5OTgiLCJpYXQiOjE2NTYzMjczNzd9.MFKss0gcsjSjhqUbPBY4ynWQSG4-IFsFITCzMEF_g0w'}})
  }
}
