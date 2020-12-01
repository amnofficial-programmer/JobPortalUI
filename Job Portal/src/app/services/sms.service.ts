







import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';

// Models





@Injectable()
export class SmsService {
    constructor(private http: HttpClient) { }
    public url: string = 'https://dashboard.d7networks.com/sms-api'

    sendOtp(data): Observable<any> {
        // req.headers({
        //     "authorization": "Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1",
        //     "x-rapidapi-host": "d7sms.p.rapidapi.com",
        //     "x-rapidapi-key": "c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b",
        //     "useQueryString": true
        // });
        let httpHeaders = new HttpHeaders()
            .set('authorization', 'Basic TUFDUkFYOk9mZmljaWFsQDEyMzQ1')
            .set('x-rapidapi-host', 'd7sms.p.rapidapi.com')
            .set('x-rapidapi-key', 'c4211c398emsh86eb1cad5fbcfbbp14b4c1jsn7e91a0ab752b')
            .set( "useQueryString", 'true');
     
        return this.http.post(this.url,data,{headers: httpHeaders });

    }

}