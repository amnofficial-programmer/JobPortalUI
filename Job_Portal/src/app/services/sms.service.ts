







import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/reponse.model';

import { Constants } from '../api-url';

// Models

@Injectable()
export class SmsService {
    
    public url: string = 'otp/generateOtp?userName='

    token:any;

    constructor(private http: HttpClient) { 
        this.token=localStorage.getItem('macrax-token')
    }

    getHTTPHeaders(): HttpHeaders {
        let result = new HttpHeaders();
        result = result.set('Content-Type', 'application/json');
        result = result.set('Authorization', 'Bearer ' +this.token);

        return result;
    }

    sendOtp(data): Observable<ResponseModel> {
        // req.headers({
        //     "authorization": "Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1",
        //     "x-rapidapi-host": "d7sms.p.rapidapi.com",
        //     "x-rapidapi-key": "c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b",
        //     "useQueryString": true
        // });
        // let httpHeaders = new HttpHeaders()
        //     .set('authorization', 'Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1')
        //     .set('x-rapidapi-host', 'd7sms.p.rapidapi.com')
        //     .set('x-rapidapi-key', 'c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b')
        //     .set( "useQueryString", 'true');
            let userName = localStorage.getItem('macrax-emailId')
            //const httpHeaders = this.getHTTPHeaders();
            return this.http.get<ResponseModel>(Constants.URL.HOST_URL+this.url+data['userName']);

     
        //return this.http.post(this.url,data,{headers: httpHeaders });

    }

}