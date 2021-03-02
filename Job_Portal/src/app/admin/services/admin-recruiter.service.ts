import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {SessionStorageService} from 'ngx-webstorage';
import { Constants } from '../admin-constants';
import { ResponseModel } from '../../models/reponse.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminRecruiterService {
  
  constructor(private http: HttpClient, private sessionStore: SessionStorageService) { 
    
  }

  getHTTPHeaders(): HttpHeaders {
    let result = new HttpHeaders();
    result = result.set('Content-Type', 'application/json');
    return result;
  }
  

  getRecruiterList(verificationStatus, index):Observable<ResponseModel> {
    // ?verificationStatus=2&index=0
    const httpParams = new HttpParams()
        .set('verificationStatus', verificationStatus)
        .set('index', index);

    return this.http.get<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Recuriter, { params: httpParams });
  }

  updateRecruiterVerificationStatus(updateObj):Observable<ResponseModel> {
    const httpHeaders = this.getHTTPHeaders();

    return this.http.post<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.updateRecruiter, updateObj,{ headers:httpHeaders,});
  }


}
