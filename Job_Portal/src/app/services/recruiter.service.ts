import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';

// Models

import { Constants } from '../api-url';
import { UserModel } from '../models/user.model';

import { ResponseModel } from '../models/reponse.model';
import { JobSeekerModel } from '../models/job-seeker.model';
import { RecruiterModel } from '../models/recruiter.model';
import {SessionStorageService} from 'ngx-webstorage';



@Injectable()
export class RecruiterService {

    token:any;

    constructor(private http: HttpClient, private sessionStore: SessionStorageService) { 

    }
    
    getHTTPHeaders(): HttpHeaders {
        this.token = this.sessionStore.retrieve('macrax-token');
        let result = new HttpHeaders();
        result = result.set('Content-Type', 'application/json');
        result = result.set('Authorization', 'Bearer ' +this.token);

        return result;
    }
    createRecruiterProfile(recruiter:RecruiterModel):Observable<ResponseModel>{
        const httpHeaders = this.getHTTPHeaders();
        return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Add_Recruiter, recruiter,{ headers: httpHeaders,});
    }

    getAllRecruiters(role:string): Observable<ResponseModel>{
        const httpHeaders = this.getHTTPHeaders();
        return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.GetRecruiters+role,{ headers: httpHeaders,});
    }

    getAllJobs(index:number): Observable<ResponseModel>{
        const httpHeaders = this.getHTTPHeaders();
        return this.http.get<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.GetAllJobs+index,{ headers: httpHeaders,});
    }


}