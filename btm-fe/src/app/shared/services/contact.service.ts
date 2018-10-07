import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {AppConst} from '../../app-const';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

    sendMessage(message){
        let url = AppConst.serverPath+"/contact/message";

        let info = {
            "name" : message.name,
            "email" : message.email,
            "title" : message.title,
            "content" : message.content
        };

        let header = new Headers ({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, info, {headers : header});
    }
}
