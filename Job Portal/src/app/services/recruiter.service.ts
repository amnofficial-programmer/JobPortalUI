import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// RxJS
import { Observable } from 'rxjs';

// Models

import { Constants } from '../api-url';
import { UserModel } from '../models/user.model';

import { ResponseModel } from '../models/reponse.model';
import { JobSeekerModel } from '../models/job-seeker.model';
import { RecruiterModel } from '../models/recruiter.model';



@Injectable()
export class RecruiterService {
    constructor(private http: HttpClient) { }
    
//     createRecruiterUser(user: UserModel): Observable<ResponseModel> {
// 		return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Job_Seeker, user);
// 	}
createRecruiterProfile(jobSeeker:RecruiterModel):Observable<ResponseModel>{
	return this.http.post<ResponseModel>(Constants.URL.HOST_URL+Constants.URL.Job_Seeker_Add, jobSeeker);

}

}