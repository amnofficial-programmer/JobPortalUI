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

  getRecruiterList(verificationStatus, index):Observable<ResponseModel> {
    // ?verificationStatus=2&index=0
    const httpParams = new HttpParams()
        .set('verificationStatus', verificationStatus)
        .set('index', index);

    return this.http.get<ResponseModel>(Constants.URL.HOST_URL + Constants.URL.Recuriter, { params: httpParams });
  }


}
