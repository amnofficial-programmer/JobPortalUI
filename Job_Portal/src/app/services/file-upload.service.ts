import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';
import {SessionStorageService} from 'ngx-webstorage';

// Models

import { Constants } from '../api-url';


import { ResponseModel } from '../models/reponse.model';




@Injectable()
export class FileUploadService {
    token:any;
    emailId:any;
    constructor(private http: HttpClient, private sessionStore: SessionStorageService) {
        //this.token=localStorage.getItem('macrax-token')
        this.token = this.sessionStore.retrieve('macrax-token')
       // this.emailId=localStorage.getItem('macrax-emailId')
        this.emailId=this.sessionStore.retrieve('macrax-emailId')
     }
     getHTTPHeaders(): HttpHeaders {
		let result = new HttpHeaders();
		// result = result.set('Content-Type', 'application/json');
        result = result.set('Authorization', 'Bearer ' +this.token);
        // multipart/form-data

		return result;
	  }
    uploadJdFile(file): Observable<ResponseModel> {
           
    var formData = new FormData();
    formData.append('file', file);

    const httpParams =new HttpParams()
    .set('emailId', this.emailId)
  
        const httpHeaders = this.getHTTPHeaders();
        const requestOptions: Object = {
            /* other options here */
            headers: httpHeaders,
            params:httpParams,
            responseType: 'text',
          }
        // headers: httpHeaders,responseType: 'text'}
        return this.http.post<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Upload_Jd_File,formData,requestOptions);

    }

    uploadProfileFile(file): Observable<ResponseModel> {
           
        var formData = new FormData();
        formData.append('file', file);
    
        const httpParams =new HttpParams()
        .set('emailId', this.emailId)
      
            const httpHeaders = this.getHTTPHeaders();
            const requestOptions: Object = {
                /* other options here */
                headers: httpHeaders,
                params:httpParams,
                responseType: 'json',
              }
            // headers: httpHeaders,responseType: 'text'}
            return this.http.post<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Upload_Profile_File,formData,requestOptions);
    
        }
    uploadJdVideo(file): Observable<ResponseModel> {
        var formData = new FormData();
        formData.append('file', file,"video_"+Date.now()+".mp4");
       
        const httpParams =new HttpParams()
    .set('emailId', this.emailId)
    
        const httpHeaders = this.getHTTPHeaders();



        const requestOptions: Object = {
            /* other options here */
            headers: httpHeaders,
            params:httpParams,
            responseType: 'text',
          }
        return this.http.post<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Upload_Jd_Video,formData,requestOptions);

    }
    verificationDocFile(file): Observable<ResponseModel> {
        var formData = new FormData();
    formData.append('file', file);

    const httpParams =new HttpParams()
    .set('emailId', this.emailId)
    
        const httpHeaders = this.getHTTPHeaders();

        const requestOptions: Object = {
            /* other options here */
            headers: httpHeaders,
            params:httpParams,
            responseType: 'text',
          }
        return this.http.post<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Upload_Verification_Doc,formData,requestOptions);

    }

}