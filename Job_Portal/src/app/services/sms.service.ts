







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
    sendOtp(data): Observable<ResponseModel> {
            return this.http.get<ResponseModel>(Constants.URL.HOST_URL+this.url+data['userName']);
    }

}